import { NavLink } from "react-router-dom";
import { BRANND_IMAGES } from "../../assets/img/brand";
import { Button, Container, Input, InputGroup } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBell,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";

import "./navbar.scss";

const Navbar = () => {

  return (
    <div className="nav-container py-4">
      <nav>
        <NavLink to={'/login'} className="w-25 p-0 brand">
          <img
            className="d-block logo"
            src={BRANND_IMAGES.BrandLogo}
            alt="logo"
          />
          <img className="pt-1" src={BRANND_IMAGES.BrandText} alt="logo" />
        </NavLink>

        <Container className="search-bar fluid">
          <InputGroup className="w-75">
            <Input placeholder="Search for anything" className="" />
            <Button>
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </InputGroup>
        </Container>

        <Container className=" w-50 d-flex user">
          <NavLink to={"https://docs.adjutor.io/"} className="ml-auto docs">
            <u>Docs</u>
          </NavLink>
          <FontAwesomeIcon icon={faBell} />
          <div>
            <img
              className="rounded-5"
              src={BRANND_IMAGES.ProfilePic}
              alt="profile"
            />
            <span className="mx-2 fw-bold">Adedeji</span>
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
        </Container>
      </nav>
    </div>
  );
};

export default Navbar;
