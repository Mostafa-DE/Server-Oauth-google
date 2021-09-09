import "../Style/Header.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

function Header({ auth }) {
  console.log(auth);
  return (
    <div className="main">
      <nav className="navContainer">
        <Link className="logo" to={"/"}>
          Emaily
        </Link>
        <ul className="containerLink">
          {auth === null && <p>Please Wait...</p>}
          {auth === false && (
            <li>
              {" "}
              <a href="/auth/google" className="link">
                Sign In With Google
              </a>{" "}
            </li>
          )}
          {auth && (
            <>
              <li>
                {" "}
                <Link to="#" className="link">
                  <Payments />
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="/surveys" className="link">
                  Your Surveys
                </Link>{" "}
              </li>
              <li>
                {" "}
                <a href="/api/logout" className="link">
                  Logout
                </a>{" "}
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
