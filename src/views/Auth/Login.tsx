import { useState } from "react";
import { useAuth } from "../../utils/authUtils";
import { Container } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { pageRoutes } from "../../variables/pageRoutes";

export const Login = () => {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate =  useNavigate();

  const handleLogin = () => {
    //@ts-expect-error
    auth.login(user);
    navigate(pageRoutes.DASHBOARD);
  };
  return (
    <Container className="m-5">
      <label htmlFor="">
        Username:{" "}
        <input type="text" onChange={(e) => setUser(e.target.value)} />
      </label>

      <button onClick={handleLogin}>Login</button>
    </Container>
  );
};
