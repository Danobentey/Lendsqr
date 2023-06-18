import {
  Badge,
  Button,
  CardFooter,
  Container,
  ListGroup,
  ListGroupItem,
  PopoverBody,
  Table,
  UncontrolledPopover,
} from "reactstrap";

import Dashboard from "../../../components/Dashboard/Dashboard";
import { BRAND_ICONS } from "../../../assets/img/icons";
// import storageUtils from "../../../utils/storageUtils";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { useMemo, useState } from "react";
import Pagination from "../../../components/Pagination/Pagination";
import { useGetAllUsers } from "./hooks/useGetAllUsers";
import { pageRoutes } from "../../../variables/pageRoutes";

interface VerificationStatusColor {
  [key: string]: string;
}

const verificationStatusColor: VerificationStatusColor = {
  active: "success",
  pending: "warning",
  inactive: "dark",
  blacklisted: "danger",
};

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
            <Table className={"p-5"} responsive>
              <thead className="p-5">
                <th>
                  <b>ORGANIZATION</b>
                  <img src={BRAND_ICONS.BarFilter} alt="filter" />
                </th>
                <th>
                  <b>USERNAME</b>
                  <img src={BRAND_ICONS.BarFilter} alt="filter" />
                </th>
                <th>
                  <b>EMAIL</b>
                  <img src={BRAND_ICONS.BarFilter} alt="filter" />
                </th>
                <th>
                  <b>PHONE NUMBER</b>
                  <img src={BRAND_ICONS.BarFilter} alt="filter" />
                </th>
                <th>
                  <b>DATE JOINED</b>
                  <img src={BRAND_ICONS.BarFilter} alt="filter" />
                </th>
                <th>
                  <b>STATUS</b>
                  <img src={BRAND_ICONS.BarFilter} alt="filter" />
                </th>
                <th className="my-auto">
                  {/* <b className="my-auto">ACTIONS</b> */}
                </th>
              </thead>
              <tbody>
                {currentTableData.map((i) => (
                  <tr key={i.username}>
                    <td className="p-3">{i.organization}</td>
                    <td className="p-3">{i.username}</td>
                    <td className="p-3">{i.email}</td>
                    <td className="p-3">{i.phone_number}</td>
                    <td className="p-3">{i.date_joined}</td>
                    <td className="p-3">
                      <Badge
                        color={verificationStatusColor[i.verification_status]}
                      >
                        {i.verification_status}
                      </Badge>
                    </td>
                    <td className="p-3">
                      <Button color="link" id={i.organization}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                      </Button>
                      <UncontrolledPopover
                        placement="left"
                        target={i.organization}
                        trigger="legacy"
                      >
                        <PopoverBody>
                          <ListGroup flush>
                            <ListGroupItem>
                              <Link className={'text-decoration-none'} to={`${pageRoutes.USERS}/${i.id}`}>
                                <img src={BRAND_ICONS.EyeView} alt="x" className="px-2" />
                                View User Details
                              </Link>
                            </ListGroupItem>
                            <ListGroupItem>
                              <Link to={`#`} className={'text-decoration-none'}>
                                <img src={BRAND_ICONS.UserCheck} alt="X" className="px-2" />
                                Activate User
                              </Link>
                            </ListGroupItem>
                            <ListGroupItem>
                              <Link to={`#`} className={'text-decoration-none'}>
                                <img src={BRAND_ICONS.UserFail} alt="X" className="px-2"/>
                                Blacklist User
                              </Link>
                            </ListGroupItem>
                          </ListGroup>
                        </PopoverBody>
                      </UncontrolledPopover>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
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
