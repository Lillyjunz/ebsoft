import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Join = () => {
  return (
    <>
      <Navbar></Navbar>
      <section classNameName="banner">
        <div>
          <div className="bg-black d-flex text-light justify-content-between">
            <div className="ps-5 " style={{ marginTop: "180px" }}>
              <h2>Join Our Team</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br></br>
                Temporibus cupiditate molestias asperiores assumenda hic impedit
              </p>
            </div>
            <img
              className="rounded-image"
              src="/images/admin.jpg"
              style={{
                width: "200px",
                height: "200px",
                border: "5px solid green",
                borderRadius: "50%",
                marginTop: "120px",
                marginRight: "200px",
              }}
            />
          </div>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          classNameName="wave"
        >
          <path
            fill="#000"
            fillOpacity="1"
            d="M0,192L80,208C160,224,320,256,480,234.7C640,213,800,139,960,122.7C1120,107,1280,149,1360,170.7L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </section>
      <div className="text-center" style={{ margin: "10% 15%" }}>
        <h2 className="fw-bold">No Vacancies at this moment</h2>
        <img src="../images/lottie.gif" width={350} height={150}></img>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Join;
