import React from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function SwiperHome() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        loop={true}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          946: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper "
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="1500"
        data-aos-once="true"
        style={{ width: "100%", paddingTop: "50px", paddingBottom: "60px" }}
      >
        <SwiperSlide className="align-items-center justify-content-center ">
          <div
            className="slide-div"
            style={{
              width: "100%",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
            }}
          >
            <div className="team mb-5" style={{ width: "50" }}>
              <img
                className="rounded-image"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1000"
                data-aos-delay="500"
                src="/images/ebimg3.jpg"
                style={{
                  width: "440px",
                  height: "180px",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              />
              <div className="team-text" style={{ width: "50" }}>
                <h5
                  className="text-black text-start"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                >
                  Oluwasegun Okunowo
                  <li
                    className="text-start pt-1"
                    style={{ color: "#a0a0a0", fontSize: "0.8rem" }}
                  >
                    Senior Product Manager (Development & Automation)
                  </li>
                </h5>

                <p
                  className="text-start"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                >
                  <ReactReadMoreReadLess
                    readMoreClassName="readMoreClassName"
                    readLessClassName="readLessClassName"
                    charLimit={200}
                    readMoreText="Read more.."
                    readLessText="Read Less.."
                  >
                    A highly accomplished Senior Technical Project Manager with
                    a robust educational background and over 8 years of
                    experience in cloud services, robotic process automation,
                    business intelligence solutions, and network security across
                    consulting and logistics industries. Skilled in cloud
                    technology, computer networking, and project management,
                    with a strong command of Microsoft Office 365 and Power
                    Platform. Certified as a PMP, Microsoft 365 Enterprise
                    Administrator Expert (MCSE), Azure Solution Architect
                    Expert, Azure DevOps Engineer Expert, and Microsoft
                    Certified Trainer (MCT). Demonstrated expertise in leading
                    cross-functional teams, driving product strategy,
                    prioritizing customer needs, and excelling in communication,
                    problem-solving, and conflict management.
                  </ReactReadMoreReadLess>
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="align-items-center justify-content-center ">
          <div
            className="slide-div"
            style={{
              width: "100%",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
            }}
          >
            <div className="team mb-5" style={{ width: "50" }}>
              <img
                className="rounded-image"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1000"
                data-aos-delay="500"
                src="/images/ebimg5.jpg"
                style={{
                  width: "440px",
                  height: "180px",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              />
              <div className="team-text" style={{ width: "50" }}>
                <h5
                  className="text-black text-start"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                >
                  Olaitan Falolu
                  <li
                    className="text-start pt-1"
                    style={{ color: "#a0a0a0", fontSize: "0.8rem" }}
                  >
                    Senior Project Manager (Engineering)
                  </li>
                </h5>

                <p
                  className="text-start"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                >
                  <ReactReadMoreReadLess
                    readMoreClassName="readMoreClassName"
                    readLessClassName="readLessClassName"
                    charLimit={200}
                    readMoreText="Read more.."
                    readLessText="Read Less.."
                  >
                    Senior Project Manager at Ebsoft with over 7 years of
                    experience in Cloud Consulting, Training, and DevOps
                    Engineering, specializing in Digital Transformation of
                    Enterprise Software development on Azure and AWS platforms.
                    My expertise spans the Financial, Banking, Consulting,
                    Manufacturing and IT industries, where I have led over 10
                    software projects, including e-commerce, payment, and crypto
                    initiatives. I focus on automating and optimizing cloud
                    infrastructure, front-end development, database management,
                    and server administration. Backed by certifications as a
                    Microsoft Certified Trainer (MCT), Azure Solution Architect,
                    Linux Administrator, and Oracle Certified Professional, I
                    excel in enhancing application monitoring with Dynatrace,
                    deploying dotnet core applications, and continuously
                    improving DevOps processes. I am passionate about leveraging
                    cloud technologies to deliver efficient, scalable, and
                    secure solutions.
                  </ReactReadMoreReadLess>
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="align-items-center justify-content-center ">
          <div
            className="slide-div"
            style={{
              width: "100%",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
            }}
          >
            <div className="team mb-5" style={{ width: "50" }}>
              <img
                className="rounded-image"
                src="/images/ebene.jpg"
                style={{
                  width: "440px",
                  height: "180px",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              />
              <div className="team-text" style={{ width: "50" }}>
                <h5
                  className="text-black text-start"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                >
                  Ebenezer Ogundare
                  <li
                    className="text-start pt-1"
                    style={{ color: "#a0a0a0", fontSize: "0.8rem" }}
                  >
                    Senior Program Manager
                  </li>
                </h5>

                <p
                  className="text-start"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                >
                  <ReactReadMoreReadLess
                    readMoreClassName="readMoreClassName"
                    readLessClassName="readLessClassName"
                    charLimit={200}
                    readMoreText="Read more.."
                    readLessText="Read Less.."
                  >
                    A seasoned leader with over 7 years of experience in driving
                    Digital Cloud Transformation and Enterprise Microservice
                    Architecture across Azure, AWS, and Private Data Centers. I
                    bring a solid background in API development and Senior
                    DevOps engineering, with a specialization in designing,
                    deploying, and automating systems and applications (APIs,
                    Backend, and Frontend) across consulting, logistics, and
                    manufacturing industries. My expertise includes optimizing
                    cloud infrastructure, networking, implementing CI/CD
                    pipelines, cybersecurity, and leveraging cloud technologies
                    to deliver efficient, scalable, and secure solutions.
                    Currently serving as a Senior Program Manager, I manage
                    planning and strategy, stakeholder relations, project
                    execution, change management, team leadership, and budget
                    oversight across client Digital Transformation & Innovation
                    projects. I hold certifications as an Azure Solution
                    Architect, DevOps Expert, and PMP, demonstrating a
                    commitment to delivering high-impact business outcomes.
                  </ReactReadMoreReadLess>
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="align-items-center justify-content-center ">
          <div
            className="slide-div"
            style={{
              width: "100%",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
            }}
          >
            <div className="team mb-5" style={{ width: "50" }}>
              <img
                className="rounded-image"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1000"
                data-aos-delay="500"
                src="/images/ebimg7.jpg"
                style={{
                  width: "440px",
                  height: "180px",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              />
              <div className="team-text" style={{ width: "50" }}>
                <h5
                  className="text-black text-start"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                >
                  Olamide Dauda
                  <li
                    className="text-start pt-1"
                    style={{ color: "#a0a0a0", fontSize: "0.8rem" }}
                  >
                    Senior HR
                  </li>
                </h5>

                <p
                  className="text-start"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                >
                  <ReactReadMoreReadLess
                    readMoreClassName="readMoreClassName"
                    readLessClassName="readLessClassName"
                    charLimit={200}
                    readMoreText="Read more.."
                    readLessText="Read Less.."
                  >
                    Experienced Human Resource Professional with a strong
                    background in leadership, people, policy, client and
                    business transformation with background experience in the
                    Advertise and manufacturing industry. Proven success in
                    Human relation, performance and organization development,
                    recruitment, staffing, employee relation, with training and
                    development, customer service and administration. A
                    bachelor’s degree in mass communication/media, and a
                    master’s degree in industrial and labor Relations from the
                    University of Lagos. Passionate about impactful human
                    capital development, I emphasize data-driven and informed
                    decision-making to enhance organizational competitive
                    advantage, working as a Led and Head of HR Partner with
                    Ebosft.
                  </ReactReadMoreReadLess>
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="align-items-center justify-content-center ">
          <div
            className="slide-div"
            style={{
              width: "100%",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
            }}
          >
            <div className="team mb-5" style={{ width: "50" }}>
              <img
                className="rounded-image"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1000"
                data-aos-delay="500"
                src="/images/ebimg6.jpg"
                style={{
                  width: "440px",
                  height: "180px",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              />
              <div className="team-text" style={{ width: "50" }}>
                <h5
                  className="text-black text-start"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                >
                  Ewomazino Oyibotha
                  <li
                    className="text-start pt-1"
                    style={{ color: "#a0a0a0", fontSize: "0.8rem" }}
                  >
                    Business Expansion, & Legal Strategist
                  </li>
                </h5>

                <p
                  className="text-start"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                >
                  <ReactReadMoreReadLess
                    readMoreClassName="readMoreClassName"
                    readLessClassName="readLessClassName"
                    charLimit={200}
                    readMoreText="Read more.."
                    readLessText="Read Less.."
                  >
                    Ewomazino Oyibotha is a distinguished Lawyer and Business
                    Expansion Expert with extensive experience in Consulting and
                    the IT tech industry. She excels in driving growth across
                    Africa and globally through strategic business planning,
                    innovative marketing and curation of industry specific legal
                    solutions. Ewomazino specializes in crafting data-driven
                    strategies that enhance brand visibility, market
                    penetration, and business development. Her legal acumen
                    ensures compliance with tax and corporate governance
                    requirements, mitigates risks, and secures successful
                    contract negotiations. An alumnus of the University of Lagos
                    with an LLM, and a proud member of the Chartered Institute
                    of Arbitrators (UK) and the Institute of Chartered Mediators
                    and Conciliators, Ewomazino has a proven track record in
                    cross-functional collaboration. She effectively aligns
                    business, marketing, and legal strategies to achieve
                    organizational goals, integrating these disciplines to
                    deliver high-impact solutions that drive sustainable growth
                    in dynamic markets.
                  </ReactReadMoreReadLess>
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
