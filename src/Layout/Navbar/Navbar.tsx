import { BRANND_IMAGES } from "../../assets/img/brand";
import { Button, Container, Input, InputGroup, NavLink } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell, faCaretDown } from "@fortawesome/free-solid-svg-icons";

import './navbar.scss'

const Navbar = () => {
  return (
    <div className="nav-container py-4">
      <nav>
        <Container className="w-25 p-0 brand">
          <img className="d-block" src={BRANND_IMAGES.BrandLogo} alt="logo" />
          <img className="pt-1" src={BRANND_IMAGES.BrandText} alt="logo" />
        </Container>

        <Container className="search-bar fluid">
          <InputGroup className="w-75">
            <Input placeholder="Search for anything" className=""/>
            <Button>
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </InputGroup>
        </Container>

        <Container className=" w-50 d-flex user">
          <NavLink className="ml-auto docs"><u>Docs</u></NavLink>
          <FontAwesomeIcon icon={faBell} />
          <div>
            <img className="rounded-5" src={BRANND_IMAGES.ProfilePic} alt="profile" />
            <span className="mx-2 fw-bold">Adedeji</span>
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
        </Container>
          
      </nav>
    </div>
  )
}

export default Navbar;
