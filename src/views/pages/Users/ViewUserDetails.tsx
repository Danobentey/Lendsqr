import { useEffect } from "react";
import { Button, Container } from "reactstrap";
import { Link, NavLink, useParams } from "react-router-dom";

import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BRAND_ICONS } from "../../../assets/img/icons";
import { pageRoutes } from "../../../variables/pageRoutes";
import { UserInfo } from "../../../components/userInfo";
import useGetUserDetails from "./hooks/useGetUserDetails";
import { useState } from "react";

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
  const [user, setUser] = useState<UserData>();
  const [loading, setLoading] = useState(true);

  const { userSelect } = useGetUserDetails(userId as string);

  useEffect(() => {
    setUser(userSelect);
    setLoading(false);
  }, [setUser, setLoading, userSelect]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (user === undefined) {
    return <h2>User Not found - Go back to <a href={pageRoutes.ALL_USERS}>Users Page</a></h2>;
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

      {!!user && (
        <Container>
          <div className="user-primary-info">
            <div>
              <img src={BRAND_ICONS.Avater} alt="avater" width={100} />
            </div>
            <div>
              <b>{user.username}</b>
              <p>{user.id}</p>
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
                <UserInfo title="FULLNAME" info={user.username} />
                <UserInfo title="PHONE NUMBER" info={user.phone_number} />
                <UserInfo title="EMAIL ADDRESS" info={user.email} />
                <UserInfo title="BVN" info={user.phone_number} />
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
                <UserInfo title="TWITTER" info={`@${user.username}`} />
                <UserInfo title="FACEBOOK" info={user.username} />
                <UserInfo title="INSTAGRAM" info={`@${user.username}`} />
              </div>
            </div>

            <div className="guarantors">
              <h1>Guarantors</h1>
              <div className="guarantor-1">
                <UserInfo title="FULLNAME" info={user.username} />
                <UserInfo title="PHONE NUMBER" info={user.phone_number} />
                <UserInfo title="EMAIL ADDRESS" info={user.email} />
                <UserInfo title="RELATIONSHIP" info="Sister``1" />
              </div>
            </div>

            <div>
              <div className="guarantor-2">
                <UserInfo title="FULLNAME" info={user.username} />
                <UserInfo title="PHONE NUMBER" info={user.phone_number} />
                <UserInfo title="EMAIL ADDRESS" info={user.email} />
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
