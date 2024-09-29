import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Caroo from "../Components/Caroo";
import Faq from "../Components/Faq";
import Footernew from "../Components/FooterNew";
import Navbar from "../Components/Navbar";

const Detail = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
  return (
    <div className="detail-wrap">
      <Navbar></Navbar>
      <div className="header aboout">
        <div className="contenti text-start">
          <h3
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="1500"
            data-aos-once="true"
          >
            Our Services
          </h3>
          <p
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="1400"
            data-aos-once="true"
          >
            Agile Expertise. Seamless Delivery. Remote Collaboration - with
            Excellence and Brilliance.
          </p>
        </div>
        <img
          className="img-fluid rounded-circle "
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="1500"
          data-aos-once="true"
          src="/images/image8.jpg"
        />
      </div>
  
      <div className="wave-container">
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
              id="straight-wave"
              d="M0 24h150v4H0z" // Straight line
            />
          </defs>
          <g className="paraax">
            <use
              xlinkHref="#straight-wave"
              x={0}
              y={0}
              fill="green"
            />
            <use
              xlinkHref="#straight-wave"
              x={0}
              y={2}
              fill="rgba(255,255,255,0.3)"
            />
           
          </g>
        </svg>
      </div>

      <div className="container " style={{ marginTop: "40px" }}>
        <div
          className="detail-div"
          id="section1"
          style={{ paddingBottom: "70px", paddingTop: "80px" }}
        >
          <div
            className="for-divider "
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="800"
            data-aos-once="true"
            style={{ paddingBottom: "40px" }}
          >
            <span className="fw-bold text-success">UI/UX Development</span>
          </div>

          <div className="cod align-items-center justify-content-center">
            <div className="codi" style={{ width: "100%" }}>
              <div
                className=" cour "
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="900"
                data-aos-once="true"
              >
                <span className="fw-bold text-success">UI/UX Development</span>
              </div>

              <div
                className="justify-content-center align-items-center"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="800"
                data-aos-once="true"
                style={{ width: "100%" }}
              >
                <div
                  className=" coop d-flex justify-content-between align-items-center  pt-3 pb-2"
                  style={{
                    width: "100%",
                    paddingLeft: "35px",
                    paddingRight: "35px",
                  }}
                >
                  <div
                    className="text-center"
                    style={{ width: "100%", paddingRight: "10px" }}
                  >
                    <div
                      className="mb-3"
                      style={{
                        border: "2px dotted black",
                        padding: "6px",
                      }}
                    >
                      <li
                        className="text-end fw-bold"
                        style={{ fontSize: "0.9em" }}
                      >
                        Balsamiq
                      </li>
                      <li className="text-start">
                        <img src="./images/balsa.png" width={50} />
                      </li>
                    </div>

                    <div
                      style={{
                        border: "2px dotted black",
                        padding: "6px",
                      }}
                    >
                      <li
                        className="text-end fw-bold"
                        style={{ fontSize: "0.9em" }}
                      >
                        Adobe Photoshop
                      </li>
                      <li className="text-start">
                        <img src="./images/adpho.png" width={30} />
                      </li>
                    </div>
                  </div>

                  <div style={{ width: "100%" }}>
                    <div
                      className="mb-3"
                      style={{
                        border: "2px dotted black",
                        padding: "6px",
                      }}
                    >
                      <li
                        className="text-end fw-bold"
                        style={{ fontSize: "0.9em" }}
                      >
                        Figma
                      </li>
                      <li className="text-start">
                        <img src="./images/figi.png" width={50} />
                      </li>
                    </div>
                    <div
                      style={{
                        border: "2px dotted black",
                        padding: "6px",
                      }}
                    >
                      <li
                        className="text-end fw-bold"
                        style={{ fontSize: "0.9em" }}
                      >
                        Adobe Illustrator
                      </li>
                      <li className="text-start">
                        <img src="./images/adi.png" width={30} />
                      </li>
                    </div>
                  </div>
                </div>
                <div
                  className="text-center detai-img d-flex align-items-center justify-content-center"
                  style={{ width: "100%" }}
                >
                  <img
                    className="  mb-5 "
                    style={{
                      width: "90%",
                      height: "200px",
                      borderRadius: "10px",
                    }}
                    src="./images/image1.jpg"
                    alt="ann"
                  />
                </div>
              </div>
            </div>
            <div
              className="codi "
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1200"
              data-aos-once="true"
              style={{ width: "100%" }}
            >
              Many of our clients initially struggle with the decision of
              whether to develop a responsive web application or a dedicated
              mobile application. At EBSOFT, we believe there’s no
              one-size-fits-all answer—it all depends on your business goals,
              target audience, and project requirements. Both options have
              distinct benefits: responsive web applications offer broad
              accessibility across devices and faster development times, while
              mobile applications can deliver a more customized, feature-rich
              user experience. Our team of expert UI/UX designers and developers
              works closely with you to analyze your needs and create a solution
              that provides optimal user engagement, smooth navigation, and
              stunning visuals. Whether it's a sleek, responsive web app or a
              powerful mobile platform, we ensure your product stands out with a
              cohesive design that enhances user interaction and achieves your
              business objectives. If you’re unsure which direction to take,
              we’re here to help. Book a free consultation with one of our
              specialists, and together, we’ll explore the best options for your
              project to maximize its success.
            </div>
          </div>
        </div>

        <div
          className="detail-div"
          id="section2"
          style={{ paddingBottom: "70px" }}
        >
          <div
            className="for-divider "
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
            data-aos-once="true"
            style={{ paddingBottom: "40px" }}
          >
            <span className="fw-bold text-success">Software Development</span>
          </div>

          <div className="cod align-items-center">
            <div
              className="codi"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="800"
              data-aos-once="true"
              style={{
                width: "90%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                className=" cour "
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1000"
                data-aos-once="true"
              >
                <span className="fw-bold text-success">UI/UX Development</span>
              </div>

              <div
                className=" coop d-flex justify-content-between align-items-center  pt-3 pb-2"
                style={{
                  width: "100%",
                  paddingLeft: "35px",
                  paddingRight: "35px",
                }}
              >
                <div
                  className="text-center"
                  style={{ width: "100%", paddingRight: "10px" }}
                >
                  <div
                    className="mb-3"
                    style={{
                      border: "2px dotted black",
                      padding: "6px",
                    }}
                  >
                    <li
                      className="text-end fw-bold"
                      style={{ fontSize: "0.9em" }}
                    >
                      Android
                    </li>
                    <li className="text-start">
                      <img src="./images/android.png" width={30} />
                    </li>
                  </div>

                  <div
                    style={{
                      border: "2px dotted black",
                      padding: "6px",
                    }}
                  >
                    <li
                      className="text-end fw-bold"
                      style={{ fontSize: "0.9em" }}
                    >
                      Flutter
                    </li>
                    <li className="text-start">
                      <img src="./images/flutt.png" width={30} />
                    </li>
                  </div>
                </div>

                <div style={{ width: "100%" }}>
                  <div
                    className="mb-3"
                    style={{
                      border: "2px dotted black",
                      padding: "6px",
                    }}
                  >
                    <li
                      className="text-end fw-bold"
                      style={{ fontSize: "0.9em" }}
                    >
                      Xamarin
                    </li>
                    <li className="text-start">
                      <img src="./images/xama.png" width={30} />
                    </li>
                  </div>
                  <div
                    style={{
                      border: "2px dotted black",
                      padding: "6px",
                    }}
                  >
                    <li
                      className="text-end fw-bold"
                      style={{ fontSize: "0.9em" }}
                    >
                      React
                    </li>
                    <li className="text-start">
                      <img src="./images/react.svg" width={50} />
                    </li>
                  </div>
                </div>
              </div>

              <div
                className="text-center detai-img align-items-center justify-content-center"
                style={{ width: "100%" }}
              >
                <img
                  className="  mb-5 "
                  style={{
                    width: "90%",
                    height: "200px",
                    borderRadius: "10px",
                  }}
                  src="./images/image02.jpg"
                  alt="ann"
                />
              </div>
            </div>
            <div
              className="codi "
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1200"
              data-aos-once="true"
              style={{ width: "90%" }}
            >
              <p>
                At ebsofT, we specialize in crafting native and enterprise-grade
                mobile/software applications. Our native applications are
                meticulously tailored to specific platforms, be it iOS or
                Android, ensuring optimal performance and user experience.
                Meanwhile, our enterprise applications empower organizations to
                streamline operations, boost employee productivity, and enhance
                customer-service delivery experiences. With a focus on security,
                scalability, and seamless integration, our enterprise apps are
                built to align perfectly with your organization's needs. Our
                skilled developers leverage platform-specific languages and
                tools such as Swift, Kotlin, Objective-C, and Java to create
                robust, feature-rich applications that deliver an exceptional
                user experience.
              </p>
            </div>
          </div>
        </div>

        <div
          className="detail-div"
          id="section3"
          style={{ paddingBottom: "70px" }}
        >
          <div
            className="fore-divider "
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
            data-aos-once="true"
            style={{ paddingBottom: "40px" }}
          >
            <span className="fw-bold text-success">
              Cloud Infrastructure Services
            </span>
          </div>

          <div className="cod mt-2 align-items-center">
            <div
              className="codi first-crid first-cridi"
              style={{ width: "90%" }}
            >
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1200"
                data-aos-once="true"
              >
                Our Cloud Infrastructure and DevOps services at ebsofT are
                designed to accelerate your business's digital transformation by
                optimizing your cloud environments and streamlining software
                delivery. Whether you’re migrating to the cloud, scaling
                existing infrastructure, or automating processes, our expert
                team ensures a seamless transition with minimal disruption. We
                specialize in building secure, scalable, and cost-effective
                cloud architectures tailored to your needs on platforms like
                AWS, Azure, and Google Cloud. By leveraging industry best
                practices in Infrastructure as Code (IaC) and containerization
                with Docker and Kubernetes, we help you enhance agility and
                operational efficiency. Our end-to-end DevOps solutions include
                continuous integration and continuous delivery (CI/CD) pipelines
                that automate deployments, reduce downtime, and ensure faster
                delivery of features and updates. With our Cloud Infrastructure
                and DevOps services, you’ll achieve a modern, robust
                infrastructure that supports innovation, scalability, and the
                reliability your business demands. Looking for expert guidance
                on optimizing your cloud strategy? Contact us for a free
                consultation, and let’s make your cloud journey a success.
              </p>
            </div>

            <div
              className="codi"
              style={{ width: "90%" }}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
              data-aos-once="true"
            >
              <div
                className=" cour "
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1000"
                data-aos-once="true"
              >
                <span className="fw-bold text-success">UI/UX Development</span>
              </div>

              <div
                className=" coop d-flex justify-content-between align-items-center  pt-3 pb-2"
                style={{
                  width: "100%",
                  paddingLeft: "35px",
                  paddingRight: "35px",
                }}
              >
                <div
                  className="text-center"
                  style={{ width: "100%", paddingRight: "10px" }}
                >
                  <div
                    className="mb-3"
                    style={{
                      border: "2px dotted black",
                      padding: "6px",
                    }}
                  >
                    <li
                      className="text-end fw-bold"
                      style={{ fontSize: "0.9em" }}
                    >
                      Amazon Services
                    </li>
                    <li className="text-start">
                      <img src="./images/ama.png" width={50} />
                    </li>
                  </div>

                  <div
                    style={{
                      border: "2px dotted black",
                      padding: "6px",
                    }}
                  >
                    <li
                      className="text-end fw-bold"
                      style={{ fontSize: "0.9em" }}
                    >
                      Microsoft Azure
                    </li>
                    <li className="text-start">
                      <img src="./images/azure.png" width={70} />
                    </li>
                  </div>
                </div>

                <div style={{ width: "100%" }}>
                  <div
                    className="mb-3"
                    style={{
                      border: "2px dotted black",
                      padding: "6px",
                    }}
                  >
                    <li
                      className="text-end fw-bold"
                      style={{ fontSize: "0.9em" }}
                    >
                      Digital Ocean
                    </li>
                    <li className="text-start">
                      <img src="./images/ocean.svg" width={60} />
                    </li>
                  </div>
                  <div
                    style={{
                      border: "2px dotted black",
                      padding: "6px",
                    }}
                  >
                    <li
                      className="text-end fw-bold"
                      style={{ fontSize: "0.9em" }}
                    >
                      Google Cloud
                    </li>
                    <li className="text-start">
                      <img src="./images/cloud.png" width={60} />
                    </li>
                  </div>
                </div>
              </div>
              <div
                className="text-center detai-img align-items-center justify-content-center"
                style={{ width: "100%" }}
              >
                <img
                  className="  mb-5 "
                  style={{
                    width: "90%",
                    height: "200px",
                    borderRadius: "10px",
                  }}
                  src="./images/image04.jpg"
                  alt="ann"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="detail-div"
          id="section4"
          style={{ paddingBottom: "70px" }}
        >
          <div
            className="fore-divider  "
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="900"
            data-aos-once="true"
            style={{ paddingBottom: "40px" }}
          >
            <span className="fw-bold text-success">
              Digital Cloud Transformation
            </span>
          </div>

          <div className="cod mt-2 align-items-center">
            <div
              className="codi first-crid first-cridi"
              style={{ width: "90%" }}
            >
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1200"
                data-aos-once="true"
              >
                At EBSOFT, our Digital Transformation, Innovation, and RPA
                services empower enterprises to evolve and lead in a rapidly
                changing digital landscape. We don’t just automate processes—we
                transform them. Our strategic approach focuses on redefining how
                your business operates by integrating cutting-edge technologies
                that streamline workflows, boost efficiency, and foster
                innovation. We specialize in deploying **Robotic Process
                Automation (RPA)** solutions that eliminate repetitive tasks,
                enhance accuracy, and free your teams to focus on high-value
                work. Coupled with AI and machine learning integration, our RPA
                services drive intelligent automation that not only optimizes
                operations but also unlocks new growth opportunities. Whether
                you’re looking to modernize legacy systems, adopt smart
                workflows, or innovate with data-driven insights, our team
                tailors digital transformation strategies that are as unique as
                your business. By partnering with EBSOFT, you’ll harness the
                power of automation, cloud technologies, and innovation to stay
                ahead in your industry. Ready to transform your operations and
                push the boundaries of what's possible? Contact us for a
                consultation, and let’s shape the future of your enterprise
                together.
              </p>
            </div>
            <div className="codi " style={{ width: "90%" }}>
              <div
                className=" cour "
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1200"
                data-aos-once="true"
              >
                <span className="fw-bold text-success">
                  Digital Cloud Transformation
                </span>
              </div>
              <img
                className=" intro-img img-fluid mb-5 "
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1000"
                data-aos-once="true"
                src="./images/image09.jpg"
                alt="ann"
              />
            </div>
          </div>
        </div>

        <div
          className="detail-div"
          id="section5"
          style={{ paddingBottom: "50px" }}
        >
          <div
            className="for-divider "
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
            data-aos-once="true"
            style={{ paddingBottom: "40px" }}
          >
            <span className="fw-bold text-success">Tech Hiring Services</span>
          </div>

          <div className="cod  align-items-center">
            <div className="codi" style={{ width: "90%" }}>
              <div
                className=" cour "
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1100"
                data-aos-once="true"
              >
                <span className="fw-bold text-success">
                  Tech Hiring Services
                </span>
              </div>
              <img
                className=" intro-img img-fluid mb-5 "
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1000"
                data-aos-once="true"
                src="./images/image1.jpg"
                alt="ann"
              />
            </div>
            <div className="codi" style={{ width: "100%" }}>
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1200"
                data-aos-once="true"
              >
                Discover skilled professionals in software development, web
                design, cloud computing, and more through our streamlined Hiring
                Service. This model is tailored for organizations seeking a
                dedicated team of engineers for specific projects or tasks. By
                leveraging this model, you can access experienced engineers at a
                lower cost including local hiring. For instance, you can Hire
                Web Developers from India or Hire DevOps Engineers but from
                ebsofT to work remotely on your projects. Elevate your team's
                capabilities with ebsofT Hiring Service. Contact us today to get
                started!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Caroo></Caroo>
      <Faq></Faq>
      <Footernew></Footernew>
    </div>
  );
};

export default Detail;
