import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import StudentLogin from "./pages/loginPage/StudentLogin";
import StaffLogin from "./pages/loginPage/StaffLogin";
import StudentSignupPage from "./pages/signupPage/StudentSignupPage";
import StaffSignupPage from "./pages/signupPage/StaffSignupPage";
import StaffDash from "./pages/dashboard/StaffDash";
import StudentDash from "./pages/dashboard/StudentDash";
import SubmitTask from "./pages/tasks/SubmitTask";
import CreateTask from "./pages/tasks/CreateTask";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth/login/student" element={<StudentLogin />} />
      <Route path="/auth/login/staff" element={<StaffLogin />} />
      <Route path="/auth/signup/student" element={<StudentSignupPage />} />
      <Route path="/auth/signup/staff" element={<StaffSignupPage />} />
      <Route path="/dashboard/staff" element={<StaffDash />} />
      <Route path="/dashboard/student" element={<StudentDash />} />
      <Route path="/dashboard/submitTask/:id" element={<SubmitTask />} />
      <Route path="/dashboard/createTask" element={<CreateTask />} />
    </Routes>
  );
};

export default AllRoutes;
