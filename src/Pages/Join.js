import Footernew from "../Components/FooterNew";
import Navbar from "../Components/Navbar";

const Join = () => {
  return (
    <>
      <Navbar></Navbar>
      <section className="ba bg-black">
        <div className="content">
          <h2>Join Our Team</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br></br>
            Temporibus cupiditate molestias asperiores assumenda hic impedit
            asperiores assumenda hic
          </p>
        </div>
        <img className="img-fluid rounded-circle" src="/images/image6.jpg" />
        <div class="custom-shape-divider-bottom-1713680653">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 119"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </section>

      <div className="text-center" style={{ margin: "10% 15%" }}>
        <h2 className="fw-bold">No Vacancies at this moment</h2>
        <img src="../images/lottie.gif" width={350} height={150}></img>
      </div>
      <Footernew></Footernew>
    </>
  );
};

export default Join;
