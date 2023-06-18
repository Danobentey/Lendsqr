import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Container } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faHouseChimney,
  faUsers,
  faUserGroup,
  faSackDollar,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";

import { BRAND_ICONS } from "../../assets/img/icons";

import "./sidebar.scss";
import { pageRoutes } from "../../variables/pageRoutes";

declare global {
  interface Node {
    closest(selector: string): Element | null;
  }
}

const Sidebar = () => {
  const [sidebarCollapse, setSidebarCollapse] = useState(true);

  const handleClickOutside = (event: MouseEvent) => {
    if (event.target instanceof Node && !event.target.closest('.sidebar')) {
      setSidebarCollapse(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Container className="sidebar">
      <div
        className="arrow-box"
        onClick={() => setSidebarCollapse(!sidebarCollapse)}
      >
        <FontAwesomeIcon icon={sidebarCollapse ? faArrowLeft : faArrowRight} />
      </div>

      <Container className={`sidebar-content ${sidebarCollapse ? "" : "unCollapse"}`} >
        <NavLink to={"#"}>
          <img src={BRAND_ICONS.Briefcase} alt="" />
          {/* <FontAwesomeIcon icon={faBriefcase} /> */}
          <span>Switch Organization</span>
          <img className="mx-2 " src={BRAND_ICONS.CaretDown} alt="" />
        </NavLink>

        <NavLink to={pageRoutes.DASHBOARD} className="mt-4">
          <FontAwesomeIcon icon={faHouseChimney} />
          <span>Dashboard</span>
        </NavLink>

        {sidebarCollapse && <p className="m-3 fw-2">CUSTOMERS</p>}

        <NavLink to={pageRoutes.ALL_USERS}>
          <FontAwesomeIcon icon={faUserGroup} />
          <span>Users</span>
        </NavLink>

        <NavLink to={"#"}>
          <FontAwesomeIcon icon={faUsers} />
          <span>Guarantors</span>
        </NavLink>

        <NavLink to={"#"}>
        <FontAwesomeIcon icon={faSackDollar} />
          <span>Loans</span>
        </NavLink>

        <NavLink to={"#"}>
         <FontAwesomeIcon icon={faHandshake} />
          <span>Decision Models</span>
        </NavLink>

        <NavLink to={"#"}>
          <FontAwesomeIcon icon={faSackDollar} />
          <span>Savings</span>
        </NavLink>

        <NavLink to={"#"}>
          <FontAwesomeIcon icon={faSackDollar} />
          <span>Loan Requests</span>
        </NavLink>

        <NavLink to={"#"}>
         <FontAwesomeIcon icon={faSackDollar} />
          <span>Whitelist</span>
        </NavLink>

        <NavLink to={"#"}>
         <FontAwesomeIcon icon={faSackDollar} />
          <span>Karma</span>
        </NavLink>
      </Container>
    </Container>
  );
};

export default Sidebar;
