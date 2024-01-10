import Logo from "../../assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import setCurrentUser from "../../actions/currentUser";
import { useDispatch, useSelector } from "react-redux";
import "./NavBar.css";
import { useEffect } from "react";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.currentUserReducer);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    dispatch(setCurrentUser(null));
  };

  useEffect(() => {
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [dispatch]);

  return (
    <div className="nav-session">
      <div className="logo-session">
        <img src={Logo} alt="" className="logo" />
        <div className="logo-name">
          <p>Students Task</p>
          <p>Submission Portal</p>
        </div>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link">
          <p>Home</p>
        </Link>
        <Link to="/about" className="nav-link">
          <p>About</p>
        </Link>
        {user === null ? (
          <>
            <Link to="/auth/login/student" className="nav-link">
              <p>Student Login</p>
            </Link>
            <Link to="/auth/login/staff" className="nav-link">
              <p>Staff Login</p>
            </Link>
          </>
        ) : (
          <>
            {user?.result.role === "staff" ? (
              <>
                <Link to="/dashboard/staff" className="nav-link">
                  <p>Dashboard</p>
                </Link>
              </>
            ) : (
              <>
                <Link to="/dashboard/student" className="nav-link">
                  <p>Dashboard</p>
                </Link>
              </>
            )}
            <Link to="/" className="nav-link" onClick={handleLogout}>
              <p>Logout</p>
            </Link>
          </>
        )}
      </div>
      <div className="nav-btn">
        <Link to="/contact" className="nav-link">
          Contact us
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
