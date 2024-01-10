import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { staffLogin } from "../../actions/auth";

const StaffLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Enter Email");
    }
    if (!password) {
      alert("Enter Password");
    }

    dispatch(staffLogin({ email, password }, navigate));
  };
  return (
    <div className="login-session">
      <h1>Staff Login Page</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="inp">
          <label htmlFor="">E-Mail ID</label>
          <input
            type="text"
            placeholder="mail Id"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="inp">
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="login-btn">Login</button>
        <br />
        <Link to="/auth/signup/staff" className="signup-btn">
          Sign up
        </Link>
      </form>
    </div>
  );
};

export default StaffLogin;
