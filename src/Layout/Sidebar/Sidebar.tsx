import { NavLink } from "react-router-dom"
import { Container } from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBriefcase, faHome, faHouseChimney } from "@fortawesome/free-solid-svg-icons"

const Sidebar = () => {
  return (
    <Container>
      <NavLink to={"/"}>
        <FontAwesomeIcon icon={faBriefcase} />
      </NavLink>
      <NavLink to={"/"}>
        <FontAwesomeIcon icon={faHouseChimney} />
      </NavLink>
    </Container>
  )
}

export default Sidebar