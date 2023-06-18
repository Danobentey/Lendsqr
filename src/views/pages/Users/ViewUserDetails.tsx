import { Button, Container } from "reactstrap";
import { Link, NavLink, useParams } from "react-router-dom";

import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BRAND_ICONS } from "../../../assets/img/icons";
import storageUtils from "../../../utils/storageUtils";
import { pageRoutes } from "../../../variables/pageRoutes";
import { UserInfo } from "../../../components/userInfo";
import { useEffect, useState } from "react";

interface UserData {
  id: string;
  organization: string;
  username: string;
  email: string;
  phone_number: string;
  date_joined: string;
  verification_status: string;
}

const ViewUserDatails = () => {
  const { userId } = useParams();
  const [allUser, setAllUser] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);

  console.log(userId);
  
  useEffect(() => {
    const fetchData = async () => {
      const {usersData} = await storageUtils.getParsedFromLocalStorage("allUsers");
      setAllUser(usersData);
      setLoading(false);
    };

    fetchData();
  }, []);

  console.log(allUser);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (userId === undefined) {
    return <h2>User Not found</h2>;
  }

  const numericUserId = parseInt(userId, 10); // Convert userId to a number

  const selectedUser = allUser.find(
    (user) => user.id === numericUserId.toString()
  );

  if (!selectedUser) {
    return <h2>User Not found</h2>;
  }


  return (
    <Container className="user-details">
      <Link to={pageRoutes.ALL_USERS} className="text-decoration-none">
        <span className="back-button">
          <FontAwesomeIcon icon={faArrowLeftLong} />
          Back to Users
        </span>
      </Link>

      <div className="d-flex justify-content-between">
        <h1>User Details</h1>

        <div className="button-container">
          <Button color="danger" outline>
            BLACKLIST USER
          </Button>
          <Button color="primary" outline>
            ACTIVATE USER
          </Button>
        </div>
      </div>

      {!!selectedUser && (
        <Container>
          <div className="user-primary-info">
            <div>
              <img src={BRAND_ICONS.Avater} alt="avater" width={100} />
            </div>
            <div>
              <b>{selectedUser.username}</b>
              <p>{selectedUser.id}</p>
            </div>
            <div>
              <h4>User's Tier</h4>
              <span>
                <img src={BRAND_ICONS.filledStar} alt="star-filled" />
                <img src={BRAND_ICONS.unfilledStar} alt="star" />
                <img src={BRAND_ICONS.unfilledStar} alt="star" />
              </span>
            </div>
            <div>
              <h3>200,000</h3>
              <p>9912345678/Providus Bank</p>
            </div>
          </div>
          <div className="nav-footer">
            <NavLink to={"#"}>General Details</NavLink>
            <NavLink to={"#"}>Documents</NavLink>
            <NavLink to={"#"}>Bank Details</NavLink>
            <NavLink to={"#"}>Loans</NavLink>
            <NavLink to={"#"}>Savings</NavLink>
            <NavLink to={"#"}>Apps and System</NavLink>
          </div>

          <div className="customer-info">
            <div className="personal-info">
              <h1>Personal Information</h1>
              <div>
                <UserInfo title="FULLNAME" info={selectedUser.username} />
                <UserInfo
                  title="PHONE NUMBER"
                  info={selectedUser.phone_number}
                />
                <UserInfo title="EMAIL ADDRESS" info={selectedUser.email} />
                <UserInfo title="BVN" info={selectedUser.phone_number} />
                <UserInfo title="GENDER" info="Female" />
                <UserInfo title="MARITAL STATUS" info="Single" />
                <UserInfo title="CHILDREN" info="None" />
                <UserInfo title="TYPE OF RESIDENCE" info="Parent's Apartment" />
              </div>
            </div>

            <div className="education">
              <h1>Education and Employment</h1>
              <div>
                <UserInfo title="LEVEL OF EDUCATION" info="B.Sc" />
                <UserInfo title="LEVEL OF EDUCATION" info="B.Sc" />
                <UserInfo title="LEVEL OF EDUCATION" info="B.Sc" />
                <UserInfo title="LEVEL OF EDUCATION" info="B.Sc" />
                <UserInfo title="LEVEL OF EDUCATION" info="B.Sc" />
                <UserInfo title="LEVEL OF EDUCATION" info="B.Sc" />
                <UserInfo title="LEVEL OF EDUCATI ON" info="B.Sc" />
              </div>
            </div>

            <div className="socials">
              <h1>Socials</h1>
              <div>
                <UserInfo title="TWITTER" info={`@${selectedUser.username}`} />
                <UserInfo title="FACEBOOK" info={selectedUser.username} />
                <UserInfo
                  title="INSTAGRAM"
                  info={`@${selectedUser.username}`}
                />
              </div>
            </div>

            <div className="guarantors">
              <h1>Guarantors</h1>
              <div className="guarantor-1">
                <UserInfo title="FULLNAME" info={selectedUser.username} />
                <UserInfo
                  title="PHONE NUMBER"
                  info={selectedUser.phone_number}
                />
                <UserInfo title="EMAIL ADDRESS" info={selectedUser.email} />
                <UserInfo title="RELATIONSHIP" info="Sister``1" />
              </div>
            </div>

            <div>
              <div className="guarantor-2">
                <UserInfo title="FULLNAME" info={selectedUser.username} />
                <UserInfo
                  title="PHONE NUMBER"
                  info={selectedUser.phone_number}
                />
                <UserInfo title="EMAIL ADDRESS" info={selectedUser.email} />
                <UserInfo title="RELATIONSHIP" info="Sister``1" />
              </div>
            </div>
          </div>
        </Container>
      )}
    </Container>
  );
};

export default ViewUserDatails;
