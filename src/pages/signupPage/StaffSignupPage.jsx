import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { staffSignup } from "../../actions/auth";


const StaffSignupPage = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert("Enter Name");
    }
    if (!email) {
      alert("Enter Email");
    }
    if (!password) {
      alert("Enter Password");
    }

    dispatch(staffSignup({ name, email, password }, navigate));
  };

  return (
    <div className="login-session">
      <h1>Staff Sign up Page</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="inp">
          <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
        <button
          to="/auth/signup/staff"
          className="signup-btn"
          style={{ marginBottom: "30px" }}
        >
          Sign up
        </button>
        <br />
        <Link to="/auth/login/staff" className="login-btn">
          Login
        </Link>
      </form>
    </div>
  );
}

export default StaffSignupPage
