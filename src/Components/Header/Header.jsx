import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Nav as="ul">
        <Nav.Item as="li">
          <NavLink className="m-4" to="/">
            home
          </NavLink>
        </Nav.Item>
        <Nav.Item as="li">
          <NavLink className="m-4" to="/products">
            Products
          </NavLink>
        </Nav.Item>
      </Nav>
    </div>
  );
}
