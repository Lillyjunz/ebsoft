import Footernew from "../Components/FooterNew";
import Navbar from "../Components/Navbar";

const Notfound = () => {
  return (
    <>
      <Navbar></Navbar>
      <div
        classNameName="text-center align-items-center justify-content-center"
        style={{ margin: "15% 35%" }}
      >
        <h2 classNameName="fw-bold text-center mb-5">Oops! Page not Found</h2>
        <img src="../images/anni.gif" width={350} height={150}></img>
      </div>

      <Footernew></Footernew>
    </>
  );
};

export default Notfound;
