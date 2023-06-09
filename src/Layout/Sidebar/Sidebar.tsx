import { NavLink } from "react-router-dom"
import { Container } from "reactstrap"
import { BRAND_ICONS } from "../../assets/img/icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBriefcase, faHouseChimney, faCaretDown } from "@fortawesome/free-solid-svg-icons"

import './sidebar.scss'

const Sidebar = () => {
  return (
    <Container className="sidebar">
      <NavLink to={"/home"}>
        <img src={BRAND_ICONS.Briefcase} alt="" />
        <span>Switch Organization</span>
        <img className="mx-2" src={BRAND_ICONS.CaretDown} alt="" />
      </NavLink>

      <NavLink to={"/"} className="mt-4">
        <img src={BRAND_ICONS.Home} alt="" />
        <span>Dashboard</span>
      </NavLink>

      <p className="mt-3 fw-2">CUSTOMERS</p>

      <NavLink to={"/"}>
        <img src={BRAND_ICONS.Users} alt="" />
        <span>Users</span>
      </NavLink>

      <NavLink to={"/"}>
        <img src={BRAND_ICONS.UserGuarantors} alt="" />
        <span>Guarantors</span>
      </NavLink>

      <NavLink to={"/"}>
        <img src={BRAND_ICONS.CashBag} alt="" />
        <span>Loans</span>
      </NavLink>

      <NavLink to={"/"}>
        <img src={BRAND_ICONS.Handshake} alt="" />
        <span>Decision Models</span>
      </NavLink>

      <NavLink to={"/"}>
        <img src={BRAND_ICONS.PiggyBank} alt="" />
        <span>Savings</span>
      </NavLink>

      <NavLink to={"/"}>
        <img src={BRAND_ICONS.CashBag} alt="" />
        <span>Loan Requests</span>
      </NavLink>

      <NavLink to={"/"}>
        <img src={BRAND_ICONS.UserCheck} alt="" />
        <span>Whitelist</span>
      </NavLink>

      <NavLink to={"/"}>
        <img src={BRAND_ICONS.UserFail} alt="" />
        <span>Karma</span>
      </NavLink>

    </Container>
  )
}

export default Sidebar