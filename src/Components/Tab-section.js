import { NavLink } from "react-router-dom";

const Tab = () => {
  return (
    <div className="tabbs">
      <div
        className=" tabb container"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="1000"
        data-aos-once="true"
        style={{ padding: "15px", paddingTop: "140px" }}
      >
        <ul
          className="nav nav-pills pb-3 ul-tab"
          id="myTab"
          role="tablist"
          style={{ borderBottom: "2px solid gray" }}
        >
          <li className="nav-item pe-4" role="presentation">
            <button
              className="nav-link active text-black fw-bold "
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home-tab-pane"
              type="button"
              role="tab"
              aria-controls="home-tab-pane"
              aria-selected="true"
            >
              <h5 className="ser fw-bold">Services</h5>
            </button>
          </li>
          <li className="nav-item li-ind " role="presentation">
            <button
              className="nav-link text-black fw-bold"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile-tab-pane"
              type="button"
              role="tab"
              aria-controls="profile-tab-pane"
              aria-selected="false"
            >
              <h5 className="eng fw-bold">Industries</h5>
            </button>
          </li>
          <li className="nav-item ps-2" role="presentation">
            <button
              className="nav-link text-black fw-bold "
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#contact-tab-pane"
              type="button"
              role="tab"
              aria-controls="contact-tab-pane"
              aria-selected="false"
            >
              <h5 className="ind fw-bold"> Engagement Models</h5>
            </button>
          </li>
        </ul>
        <div
          className="tab-content ps-4 container-fluid "
          id="myTabContent"
          style={{
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "15px",
            marginTop: "30px",
          }}
        >
          <div
            className="tab-pane fade show active"
            id="home-tab-pane"
            role="tabpanel"
            aria-labelledby="home-tab"
            tabIndex="0"
          >
            <div className="p-1">
              <div className="row " style={{ marginBottom: "100px" }}>
                <div
                  className="col-lg-4 pt-5 "
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="1500"
                  data-aos-once="true"
                >
                  <h3 className="fw-bold pb-2">
                    Software and Mobile<br></br> Development
                  </h3>
                  <p className="pt-3 pb-2" style={{ maxWidth: "90%" }}>
                    At ebsofT, we specialize in crafting native and
                    enterprise-grade mobile/software applications. Our native
                    applications are meticulously tailored to specific
                    platforms, be it iOS or Android, ensuring optimal
                    performance and user experience. Meanwhile, our enterprise
                    applications empower organizations to streamline operations,
                    boost employee productivity, and enhance customer-service
                    delivery experiences.
                  </p>
                  <NavLink to="/detail">
                    <button className="btn btn-outline-success fw-bold">
                      Read More
                    </button>
                  </NavLink>
                </div>

                <div
                  className="col-lg-4 pt-5 "
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-delay="1000"
                  data-aos-once="true"
                >
                  <h3 className="fw-bold pb-2">
                    UI/UX and Web<br></br> Development
                  </h3>
                  <p className="pt-3 pb-2" style={{ maxWidth: "90%" }}>
                    Many of our clients initially struggle with the decision of
                    whether to develop a responsive web application or a
                    dedicated mobile application. At EBSOFT, we believe there’s
                    no one-size-fits-all answer—it all depends on your business
                    goals, target audience, and project requirements. Both
                    options have distinct benefits: responsive web applications
                    offer broad accessibility across devices and faster
                    development times...
                  </p>
                  <NavLink to="/detail">
                    <button className="btn btn-outline-success fw-bold fw-bold">
                      Read More
                    </button>
                  </NavLink>
                </div>
                <div
                  className="col-lg-4 pt-5 "
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="1300"
                  data-aos-once="true"
                >
                  <h3 className="fw-bold pb-2">
                    Cloud Infrastructure <br></br> Services
                  </h3>
                  <p className="pt-3 pb-2" style={{ maxWidth: "90%" }}>
                    Our Cloud Infrastructure and DevOps services at ebsofT are
                    designed to accelerate your business's digital
                    transformation by optimizing your cloud environments and
                    streamlining software delivery. Whether you’re migrating to
                    the cloud, scaling existing infrastructure, or automating
                    processes, our expert team ensures a seamless transition
                    with minimal disruption.
                  </p>
                  <NavLink to="/detail">
                    <button className="btn btn-outline-success fw-bold">
                      Read More
                    </button>
                  </NavLink>
                </div>
                <div
                  className="col-lg-4 pt-5 "
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="1500"
                  data-aos-once="true"
                >
                  <h3 className="fw-bold pb-2">
                    Digital Cloud <br></br>Transformation
                  </h3>
                  <p className="pt-3 pb-2" style={{ maxWidth: "90%" }}>
                    At EBSOFT, our Digital Transformation, Innovation, and RPA
                    services empower enterprises to evolve and lead in a rapidly
                    changing digital landscape. We don’t just automate
                    processes—we transform them. Our strategic approach focuses
                    on redefining how your business operates by integrating
                    cutting-edge technologies that streamline workflows, boost
                    efficiency, and foster innovation.
                  </p>
                  <NavLink to="/detail">
                    <button className="btn btn-outline-success fw-bold">
                      Read More
                    </button>
                  </NavLink>
                </div>
                <div
                  className="col-lg-4 pt-5 "
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="1600"
                  data-aos-once="true"
                >
                  <h3 className="fw-bold pb-2">
                    Tech Hiring <br></br> Services
                  </h3>
                  <p className="pt-3 pb-2" style={{ maxWidth: "90%" }}>
                    Discover skilled professionals in software development, web
                    design, cloud computing, and more through our streamlined
                    Hiring Service. This model is tailored for organizations
                    seeking a dedicated team of engineers for specific projects
                    or tasks. By leveraging this model, you can access
                    experienced engineers at a lower cost including local
                    hiring.
                  </p>
                  <NavLink to="/detail">
                    <button className="btn btn-outline-success fw-bold">
                      Read More
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="profile-tab-pane"
            role="tabpanel"
            aria-labelledby="profile-tab"
            tabIndex="0"
          >
            <div
              className="row p-1"
              style={{ marginBottom: "100px", paddingBottom: "170px" }}
            >
              <div
                className="col-lg-4 pt-3 "
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1500"
                data-aos-once="true"
              >
                <h3 className="fw-bold pb-2">Public Governance</h3>
                <p className="pt-3 pb-3" style={{ maxWidth: "90%" }}>
                  Advanced software solutions that streamline public
                  administration, enhance transparency, improve service
                  delivery, and drive efficiency in government operations.
                </p>
              </div>

              <div
                className="col-lg-4 pt-3 "
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1600"
                data-aos-once="true"
              >
                <h3 className="fw-bold pb-2">Health Care</h3>
                <p className="pt-3 pb-3" style={{ maxWidth: "90%" }}>
                  Revolutionary tech solutions powered by wearable devices,
                  enabling real-time health monitoring, data-driven insights,
                  and improved patient care.
                </p>
              </div>
              <div
                className="col-lg-4 pt-3 "
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1600"
                data-aos-once="true"
              >
                <h3 className="fw-bold pb-2">Retail and Commerce</h3>
                <p className="pt-3 pb-3" style={{ maxWidth: "90%" }}>
                  AI-driven digital solutions designed to optimize retail
                  operations, enhance customer experiences, and deliver quick
                  ROI through smarter automation and data insights.
                </p>
              </div>
              <div
                className="col-lg-4 pt-3 "
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1500"
                data-aos-once="true"
              >
                <h3 className="fw-bold pb-2">Logistics</h3>
                <p className="pt-3 pb-3" style={{ maxWidth: "90%" }}>
                  Leverage cutting-edge data analytics and seamless API
                  integrations with distribution and geolocation systems to
                  optimize logistics operations. Our solutions enhance real-time
                  tracking, streamline supply chain processes, and drive greater
                  efficiency for logistics businesses.
                </p>
              </div>
              <div
                className="col-lg-4 pt-3 "
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1500"
                data-aos-once="true"
              >
                <h3 className="fw-bold pb-2">Travel and Hospitality</h3>
                <p className="pt-3 pb-3" style={{ maxWidth: "90%" }}>
                  Innovative technology solutions for hotels, travel, tours, and
                  restaurants, enhancing customer experiences with seamless
                  automation, personalization, and real-time services.
                </p>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="contact-tab-pane"
            role="tabpanel"
            aria-labelledby="contact-tab"
            tabIndex="0"
          >
            <div
              className="row p-1 "
              style={{ marginBottom: "160px", paddingBottom: "200px" }}
            >
              <div
                className="col-lg-6 pb-3 pt-3 "
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="1500"
                data-aos-once="true"
              >
                <h4 className="fw-bold pb-3">Partial end to end Development</h4>
                <p style={{ maxWidth: "90%" }}>
                  In this engagement model, our development team assumes
                  responsibility for managing and publishing code commits
                  directly to the client’s platform, particularly if there is an
                  existing DevOps or engineering team in place. However,
                  depending on the terms of the agreement, our DevOps and
                  engineering team may exclusively build out development code
                  commits within the client’s platform or environment.
                  Additionally, in some cases based on the agreement, ebsofT may
                  be engaged solely for development purposes, with the codes
                  handed over to the clients upon completion for its hosting and
                  operations. For example, clients may specifically request the
                  expertise of an ebsofT Developer for their project. The
                  primary objective of this engagement model is to operate
                  entirely within the client's platform or hosting environment,
                  accommodating the needs of both our development team and/or
                  the entire development/engineering team. In some instances,
                  clients may require the comprehensive support of our entire
                  ebsofT Development/Engineering Ops team. Regardless, all of
                  our involvement is conducted within the client’s hosting
                  cloud, on-premises solutions, or platform.
                </p>
              </div>

              <div
                className="col-lg-6 pt-3 "
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="1500"
                data-aos-once="true"
              >
                <h4 className="fw-bold pb-3">
                  Complete end to end Model Development
                </h4>
                <p style={{ maxWidth: "90%" }}>
                  This engagement model is typically ideal for individual
                  clients and startups seeking to offload hosting and platform
                  management responsibilities to the expertise of ebsofT. The
                  primary objective of this engagement is that the hosting
                  platform for development and applications is managed by us,
                  ebsofT, on the agreed-upon cloud provider / solution. However,
                  the code will be transferred to the clients upon completion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
