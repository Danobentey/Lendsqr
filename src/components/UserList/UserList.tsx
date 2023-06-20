import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import { Table, Badge, Button, UncontrolledPopover, PopoverBody, ListGroup, ListGroupItem } from "reactstrap"
import { BRAND_ICONS } from "../../assets/img/icons"
import { pageRoutes } from "../../variables/pageRoutes"
import { UserData } from "../../types/uses"

interface VerificationStatusColor {
  [key: string]: string;
}

const verificationStatusColor: VerificationStatusColor = {
  active: "success",
  pending: "warning",
  inactive: "dark",
  blacklisted: "danger",
};

const UserList = ({ currentTableData }: { currentTableData: UserData[] }) => {
  return (
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
  )
}

export default UserList