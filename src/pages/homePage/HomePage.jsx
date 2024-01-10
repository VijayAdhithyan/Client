import homePage from "../../assets/homePageImg.png";
// import NavBar from "../../components/navBar/NavBar";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      {/* <NavBar /> */}
      <div className="home-page-session">
        <div className="left-side-container">
          <p className="para-group-1">MANAGE THE</p>
          <p className="para-group-1">ASSIGNMENT</p>
          <p className="para-group-1">DETAILS</p>
          <p className="para-group-2">A complete solution</p>
          <p className="para-group-2">for assignment management</p>
          <p className="home-btn">Read more</p>
        </div>
        <img src={homePage} alt="" width={600} className="left-side-img" />
      </div>
    </>
  );
};

export default HomePage;
