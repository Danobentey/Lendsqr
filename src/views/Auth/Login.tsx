import { useState } from "react";
import { useAuth } from "../../utils/authUtils";
import { NavLink, useNavigate } from "react-router-dom";
import { pageRoutes } from "../../variables/pageRoutes";
import { BRANND_IMAGES } from "../../assets/img/brand";
import { Button, Input } from "reactstrap";

export const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    //@ts-expect-error
    auth.login({ user, password });
    navigate(pageRoutes.DASHBOARD);
  };
  return (
    <div className="login-page">
      <img src={BRANND_IMAGES.FullLogo} alt="" />
      <div>
        <div>
          <img className="landing-image" src={BRANND_IMAGES.LandingPagePic} alt="" />
        </div>
        <div className="form-container">
          <div>
            <h1>Welcome!</h1>
            <p>Enter details to login.</p>
          </div>
          <form action="">
            <Input
              placeholder="USERNAME"
              type="text"
              onChange={(e) => setUser(e.target.value)}
            />
            <Input
              placeholder="PASSWORD"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <NavLink to={""} onClick={() => {}}>
              FORGOT PASSWORD?
            </NavLink>

            <Button onClick={handleLogin}>Login</Button>
          </form>
        </div>
      </div>
    </div>
  );
};
