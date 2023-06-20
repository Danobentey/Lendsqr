import {
  CardFooter,
  Container,
} from "reactstrap";

import Dashboard from "../../../components/Dashboard/Dashboard";
import { useMemo, useState } from "react";
import Pagination from "../../../components/Pagination/Pagination";
import UserList from "../../../components/UserList/UserList";
import { useGetAllUsers } from "./hooks/useGetAllUsers";


const PageSize = 10;

const ViewAllUsers = () => {
  const { allUsers, loading } = useGetAllUsers();

  // const allUsers: UserData[] =
  //   storageUtils.getParsedFromLocalStorage("allUsers");
  
  const [currentPage, setCurrentPage] = useState(1);
  
  const currentTableData = useMemo(() => {
    const lastPageIndex = currentPage * PageSize;
    const firstPageIndex = lastPageIndex - PageSize;

    if (allUsers) console.log(allUsers.slice(firstPageIndex, lastPageIndex));
    if (allUsers) return allUsers.slice(firstPageIndex, lastPageIndex);

  }, [currentPage, allUsers]);
  
  return (
    <>
      <Dashboard />
      <Container className="mt-5 users-table" fluid>
        {loading && <h3 className="mx-5">Loading... - Please Wait</h3>}
        {!!currentTableData?.length && !!allUsers?.length && (
          <Container className="table table-responsive-xl">
            <UserList currentTableData={currentTableData} />
            <CardFooter className="footer">
              <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={allUsers.length}
                pageSize={PageSize}
                onPageChange={(page: number) => setCurrentPage(page)}
              />
            </CardFooter>
          </Container>
        )}
      </Container>
    </>
  );
};

export default ViewAllUsers;
