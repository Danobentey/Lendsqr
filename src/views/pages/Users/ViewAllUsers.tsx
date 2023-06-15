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
import api from "../../../variables/api";
import axios from "axios";
import storageUtils from "../../../utils/storageUtils";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { Pagination } from "../../../components/Pagiantion";
import { useEffect, useState } from "react";
import Paginate from "../../../components/Pageinate/Paginate";
import { useGetAllUsers } from "./hooks/useGetAllUsers";
import Skeleton from "react-loading-skeleton";

interface VerificationStatusColor {
  [key: string]: string;
}

export interface UserData {
  Organization: string;
  username: string;
  email: string;
  phone_number: string;
  date_joined: string;
  verification_status: string;
}

const verificationStatusColor: VerificationStatusColor = {
  Active: "success",
  Pending: "warning",
  Inactive: "dark",
  Blacklisted: "danger",
};

const ViewAllUsers = () => {
  const [userData, setUserData] = useState<UserData[]>([]);
  // const { allUsers } = useGetAllUsers();

  const allUsers :UserData[] = storageUtils.getParsedFromLocalStorage("allUsers")
  // useEffect(() => {
  //   const getAllUsers = async () => {
  //     const res = await axios.get(api.FETCH_ALL_USERS);
  //     const users = res.data;
  //     setUserData(users);

  //     localStorage.setItem("allUsers", JSON.stringify(users));
  //   };

  //   getAllUsers();
  // }, []);

  // setUserData(allUsers)

  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastitem = currentPage * itemsPerPage;
  const indexOfFirstitem = indexOfLastitem / itemsPerPage;
  const currentItems = userData.slice(indexOfFirstitem, indexOfLastitem);
  // setUserData(currentItems);

  // const pageChange = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <Dashboard />
      <Container className="mt-5 users-table" fluid>
        {!!allUsers?.length && (
          <Container className="table-responsive-xl">
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
                {allUsers.map((i) => (
                  <tr key={i.username}>
                    <td className="p-3">{i.Organization}</td>
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
                      <Button color="link" id={i.Organization}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                      </Button>
                      <UncontrolledPopover
                        placement="left"
                        target={i.Organization}
                        trigger="legacy"
                      >
                        <PopoverBody>
                          <ListGroup flush>
                            <ListGroupItem>
                              <Link to={"#"}>
                                <img src={BRAND_ICONS.EyeView} alt="x" />
                                View User Detail
                              </Link>
                            </ListGroupItem>
                            <ListGroupItem>
                              <Link to={`#`}>
                                <img src={BRAND_ICONS.UserCheck} alt="X" />
                                Activate User
                              </Link>
                            </ListGroupItem>
                            <ListGroupItem>
                              <Link to={`#`}>
                                <img src={BRAND_ICONS.UserFail} alt="X" />
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
          </Container>
        )}

        {/* <CardFooter>
          <Paginate
            itemsPerPage={itemsPerPage}
            totalItems={userData.length}
            // pageNum={currentItems}
          />
        </CardFooter> */}
      </Container>
    </>
  );
};

export default ViewAllUsers;
