import Footernew from "../Components/FooterNew";
import Navbar from "../Components/Navbar";
import SwiperCarousel from "../Components/Swipercarous";
import Team from "../Components/Team";
const About = () => {
  return (
    <div className="abb">
      <Navbar></Navbar>
      <section className="ba bg-black">
        <div className="content">
          <h3>About Ebsoft</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            cupiditate molestias asperiores assumenda hic impedit asperiores
          </p>
        </div>
        <img className="img-fluid rounded-circle" src="/images/image04.jpg" />
        <div class="custom-shape-divider-bottom-1713680653">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 118"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </section>

      <div style={{ paddingBottom: "100px" }}>
        <div className="crid">
          <div className="first-crid" style={{ width: "90%" }}>
            <h4 className="fw-bold text-primary">Our Mission</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              deserunt, adipisci sed expedita eius autem dolorum impedit nihil,
              dicta, recusandae harum maxime blanditiis fugit tenetur possimus
              commodi aliquam nobis in commodi aliquam nobis in.
            </p>
          </div>

          <div className="second-crid" style={{ width: "85%" }}>
            <h3 className="text-center text-primary img-txt fw-bold">
              Our Mission
            </h3>
            <img
              className=" img-fluid intro-img"
              src="./images/image03.jpg"
              alt="ann"
            />
          </div>

          <div className="third-crid" style={{ width: "85%" }}>
            <h3 className="text-center text-primary img-txt  fw-bold">
              Our Vision
            </h3>
            <img
              className=" img-fluid intro-img"
              src="./images/image10.jpg"
              alt="ann"
            />
          </div>

          <div className="fourth-crid" style={{ width: "90%" }}>
            <h4 className="fw-bold text-primary">Our Vision</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              deserunt, adipisci sed expedita eius autem dolorum impedit nihil,
              dicta, recusandae harum maxime blanditiis fugit tenetur possimus
              commodi aliquam nobis in commodi aliquam nobis in.
            </p>
          </div>
        </div>
      </div>

      <div className="reg mt-4">
        <div
          className="row py-5 px-4 "
          style={{ backgroundColor: "rgba(0, 0, 0, .3)" }}
        >
          <h3 className="text-light text-center fw-bold">Our Values</h3>
          <div className="d-flex text-light">
            <div className=" w-100 me-5 mt-5">
              <h4 className=" fw-bold text-center">Happiness</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tenetur ab recusandae sint eius obcaecati atque, necessitatibus
                nam voluptates aliquid, natus quas quia illo? Provident
                accusamus laudantium dolores mollitia tempora incidunt!
              </p>
            </div>
            <div className=" w-100 mt-5">
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
      <Footernew></Footernew>
    </div>
  );
};

export default About;
