import { Col, Container, Row } from "reactstrap";
import { DASH_IMAGES } from "../../assets/img/dashboard";
import Cards from "../Cards";
import "./dashboard.scss";

const Dashboard = () => {
  return (
    <Container className="dashboard">
      <Row className="p-0">
        <Col p-0 md="3" sm="6" xs="12" >
          <Cards imgSrc={DASH_IMAGES.users} title="USERS" value={1234} />
        </Col>
        <Col md="3" sm="6" xs="12" >
          <Cards imgSrc={DASH_IMAGES.activeUsers} title="USERS" value={1234} />
        </Col>
        <Col md="3" sm="6" xs="12" >
          <Cards imgSrc={DASH_IMAGES.userLoans} title="USERS" value={1234} />
        </Col>
        <Col md="3" sm="6" xs="12" >
          <Cards imgSrc={DASH_IMAGES.userSavings} title="USERS" value={1234} />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
