import { Col, Container, Row } from "reactstrap";
import { DASH_IMAGES } from "../../assets/img/dashboard";
import Cards from "../Cards";
import "./dashboard.scss";
import { pageRoutes } from "../../variables/pageRoutes";

const Dashboard = () => {
  return (
    <Container className="dashboard">
      <Row className="p-0">
        <Col p-0 lg="3" sm="6" xs="12" >
          <Cards imgSrc={DASH_IMAGES.users} title="USERS" value={1234} link={pageRoutes.ALL_USERS} />
        </Col>
        <Col lg="3" sm="6" xs="12" >
          <Cards imgSrc={DASH_IMAGES.activeUsers} title="ACTIVE USERS" value={1234} />
        </Col>
        <Col lg="3" sm="6" xs="12" >
          <Cards imgSrc={DASH_IMAGES.userLoans} title="USERS WITH LOANS" value={1234} />
        </Col>
        <Col lg="3" sm="6" xs="12" >
          <Cards imgSrc={DASH_IMAGES.userSavings} title="USERS WITH SAVINGS" value={102453} />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
