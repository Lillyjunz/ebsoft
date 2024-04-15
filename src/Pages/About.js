import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import SwiperCarousel from "../Components/Swipercarous";
import Team from "../Components/Team";

const About = () => {
  return (
    <>
      <Navbar></Navbar>
      <section classNameName="banner">
        <div>
          <div className="bg-black d-flex text-light justify-content-between">
            <div className="ps-5 " style={{ marginTop: "180px" }}>
              <h2>About Ebsoft</h2>
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
            fill-opacity="1"
            d="M0,192L80,208C160,224,320,256,480,234.7C640,213,800,139,960,122.7C1120,107,1280,149,1360,170.7L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </section>

      <div className="d-flex justify-content-between ms-5">
        <div className=" align-items-center justify-content-center ">
          <div className="mb-5 intro-text">
            <h4 className="fw-bold text-primary">Our Mission</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              deserunt, adipisci sed expedita eius autem dolorum impedit nihil,
              dicta, recusandae harum maxime blanditiis fugit tenetur possimus
              commodi aliquam nobis in.
            </p>
          </div>
          <img
            className=" intro-img"
            src="./images/intro.jpg"
            alt="ann"
            width={400}
            height={300}
          />
        </div>

        <div className=" align-items-center justify-content-center">
          <img
            className=" intro-img mb-5"
            src="./images/intro.jpg"
            alt="ann"
            width={400}
            height={300}
          />
          <div className="intro-text">
            <h4 className="fw-bold text-primary">Our Vision</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              deserunt, adipisci sed expedita eius autem dolorum impedit nihil,
              dicta, recusandae harum maxime blanditiis fugit tenetur possimus
              commodi aliquam nobis in.
            </p>
          </div>
        </div>
      </div>

      <div className="reg mt-5">
        <div
          className="row py-5 px-4 "
          style={{ backgroundColor: "rgba(0, 0, 0, .6)" }}
        >
          <h3 className="text-light text-center fw-bold">Our Values</h3>
          <div className="d-flex text-light">
            <div className=" w-100 me-5">
              <h4 className=" fw-bold text-center">Happiness</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tenetur ab recusandae sint eius obcaecati atque, necessitatibus
                nam voluptates aliquid, natus quas quia illo? Provident
                accusamus laudantium dolores mollitia tempora incidunt!
              </p>
            </div>
            <div className=" w-100">
              <h4 className="fw-bold text-light text-center">Honesty</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Numquam, impedit atque id architecto ab in? Veniam sunt illum
                consectetur ut et consequatur, a tempore veritatis, iusto fugit
                officia harum animi?
              </p>
            </div>
          </div>
        </div>
      </div>
      <Team></Team>
      <SwiperCarousel></SwiperCarousel>
      <Footer></Footer>
    </>
  );
};

export default About;
