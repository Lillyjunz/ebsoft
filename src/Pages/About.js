import Footernew from "../Components/FooterNew";
import Navbar from "../Components/Navbar";
import SwiperCarousel from "../Components/Swipercarous";
import Team from "../Components/Team";

const About = () => {
  return (
    <div className="abb">
      <Navbar></Navbar>

      <div className="header aboout">
        {/*Content before waves*/}

        <div className="contenti text-start">
          <h3
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="500"
            data-aos-once="true"
          >
            About Ebsoft
          </h3>
          <p
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="500"
            data-aos-once="true"
          >
            Excellence and Brilliance guide our every step – We Visualize it. We
            Design it. We Build it. We Deliver it.
          </p>
        </div>
        <img
          className="img-fluid rounded-circle "
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-once="true"
          src="/images/image04.jpg"
        />
        {/*Waves Container*/}
        <div>
          <svg
            className="wavs"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="paralax">
              {/* <use xlink:href="#gentle-wave" x="48" y="0" fill="#006400" /> */}
              <use xlinkHref="#gentle-wave" x={48} y={3} fill="#006400" />
              <use
                xlinkHref="#gentle-wave"
                x={48}
                y={5}
                fill="rgba(255,255,255,0.3)"
              />
              <use xlinkHref="#gentle-wave" x={48} y={7} fill="#fff" />
            </g>
          </svg>
        </div>
        {/*Waves end*/}
      </div>

      <div className="front" style={{ paddingBottom: "80px" }}>
        <div className="crid">
          <div
            className="first-crid"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1000"
            data-aos-delay="500"
            style={{ width: "100%" }}
          >
            <h1
              className="fw-bold text-success ourm "
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              Our Mission
            </h1>

            <p
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              EbsofT - where expertise meets innovation across UI/UX Web,
              Software, and Mobile App Development, Cloud Infrastructure with
              Digital Transformation, Innovation and Operational Services. By
              partnering with us, access a high-performing team without overhead
              costs. Our commitment to delivering quality, cost-effective IT
              solutions empower businesses of all sizes to strengthen their
              digital presence. With Agile Development Methodology and tailored
              outsourcing solutions, we ensure confidentiality and timely,
              budget-friendly project delivery. Experience the difference with
              EbsofT and elevate your digital endeavors.
            </p>
          </div>

          <div className="second-crid" style={{ width: "90%" }}>
            <div
              className="for-divider our "
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <span className="fw-bold text-success">Our Mission</span>
            </div>

            <img
              className=" img-fluid intro-img "
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1000"
              data-aos-delay="500"
              src="./images/image13.jpg"
              alt="ann"
            />
          </div>

          <div className="third-crid" style={{ width: "90%" }}>
            <div
              className="for-divider our "
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <span className="fw-bold text-success">Our Vision</span>
            </div>
            <img
              className=" img-fluid intro-img "
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1000"
              data-aos-delay="500"
              src="./images/image10.jpg"
              alt="ann"
            />
          </div>

          <div className="fourth-crid" style={{ width: "100%" }}>
            <h1
              className="fw-bold text-success ourm "
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              Our Vision
            </h1>
            <p
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <b>Visualize. Design. Build. Deliver.</b>
              <br></br>At ebsofT, we are with you every step of the way. From
              visualization to delivery, we work as a team to bring your ideas
              to life with excellence and brilliance.
            </p>
          </div>
        </div>
      </div>

      <div className="reg mt-4">
        <div
          className="row py-5 px-4 "
          style={{ backgroundColor: "rgba(0, 0, 0, .3)" }}
        >
          <h1
            className="text-light text-center fw-bold "
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            Our Values
          </h1>
          <div className="crid text-light">
            <div className=" w-100 me-5 mt-5">
              <h3
                className=" fw-bold text-center"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                Excellence
              </h3>
              <p
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                At ebsofT, Excellence is our foundational principle, ingrained
                in every line of code we write, every system we architect, and
                every solution we deliver. We pursue excellence relentlessly,
                leveraging cutting-edge technologies, adhering to industry best
                practices, and maintaining meticulous attention to detail in all
                our endeavors. Our commitment to excellence drives us to
                continuously refine our skills, optimize our processes, and push
                the boundaries of innovation. It is the cornerstone of our
                success, ensuring that we deliver robust, scalable, and
                high-performing solutions that exceed the technical expectations
                of our clients and partners.
              </p>
            </div>
            <div className=" w-100 mt-5">
              <h3
                className="fw-bold text-light text-center "
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                Brilliance
              </h3>
              <p
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                In our vision statement, we set out to establish brilliance as
                the hallmark of our technological endeavors. We envision a
                future where every aspect of our solutions, from software
                development to operation, reflects unparalleled creativity,
                ingenuity, and technical prowess. Brilliance guides us as we
                strive to engineer solutions that not only meet the functional
                requirements but also dazzle with their elegance, efficiency,
                and impact. It is our unwavering commitment to excellence,
                creativity, and technical excellence that sets us apart in the
                dynamic landscape of IT.
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
