import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Notfound = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="text-center" style={{ margin: "10% 15%" }}>
        <h2 className="fw-bold">No Vacancies at this moment</h2>
        <img src="../images/lottie.gif" width={350} height={150}></img>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Notfound;
