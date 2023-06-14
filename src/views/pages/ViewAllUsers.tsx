import { Container, Table } from "reactstrap";
import Dashboard from "../../components/Dashboard/Dashboard";
import { BRAND_ICONS } from "../../assets/img/icons";

const ViewAllUsers = () => {
  return (
    <>
      <Dashboard />
      <Container className="mt-5 view-all-user" fluid>
        <Table responsive>
          <thead className="pt-3">
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
            <th>
              <b>ACTIONS</b>
              <img src={BRAND_ICONS.BarFilter} alt="filter" />
            </th>
          </thead>
          <tbody></tbody>
        </Table>
      </Container>
    </>
  );
};

export default ViewAllUsers;
