import React from "react";
import Slider from "react-slick";

const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000, // Change slide every 3 seconds
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div>
          <div
            className="slidiv"
            style={{
              paddingTop: "20px",
              textAlign: "center",
              backgroundColor: "#ECF4EF",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)", // Add box shadow
              borderRadius: "10px",
              width: "70%",
              padding: "55px 50px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto",
            }}
          >
            {/* Stars in a horizontal row */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "10px",
              }}
            >
              {[...Array(5)].map((_, starIndex) => (
                <img
                  key={starIndex}
                  style={{ width: "15px", marginRight: "5px" }}
                  src="../images/star.svg"
                  alt="star"
                />
              ))}
            </div>
            <h3 className="fw-bold">
              <i>
                "EBSOFT is more than just a service provider—they're a tech
                ally."
              </i>
            </h3>
            <p>
              They took the time to understand our unique challenges and
              delivered exceptional solutions. Moving from a single software
              engineer managing our website to a cost-effective, company-wide
              collaboration with EBSOFT has been a game-changer.
            </p>
            <div className="pt-3">
              <h4 className="fw-bold">CEO at NIKICHIS Limited</h4>
              <p>Richard</p>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div>
          <div
            style={{
              textAlign: "center",
              paddingTop: "20px",
              textAlign: "center",
              backgroundColor: "#ECF4EF",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)", // Add box shadow
              borderRadius: "10px",
              width: "70%",
              padding: "55px 50px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto",
            }}
          >
            {/* Stars in a horizontal row */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "10px",
              }}
            >
              {[...Array(5)].map((_, starIndex) => (
                <img
                  key={starIndex}
                  style={{ width: "15px", marginRight: "5px" }}
                  src="../images/star.svg"
                  alt="star"
                />
              ))}
            </div>
            <h3 className="fw-bold">
              <i>
                {" "}
                "EBSOFT's innovative solutions directly contributed to our
                client’s business growth. "
              </i>
            </h3>
            <p>
              Worked with EBSOFT team on multiple airline and hotel reservation
              web app projects. Their hands-on expertise in cloud architecture
              and automation helped us scale faster than anticipated, especially
              in API and backend development with Airline GDS, ensured a smooth
              deployment of our application across multiple environments. Their
              innovative solutions directly contributed to our client’s business
              growth.
            </p>
            <div className="pt-3">
              <h4 className="fw-bold">
                {" "}
                Founder, Developer Head at ADEXSQUARE Technology
              </h4>
              <p>Ezekiel</p>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="slide-div">
          <div
            style={{
              textAlign: "center",
              paddingTop: "20px",
              textAlign: "center",
              backgroundColor: "#ECF4EF",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)", // Add box shadow
              borderRadius: "10px",
              width: "70%",
              padding: "55px 50px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto",
            }}
          >
            {/* Stars in a horizontal row */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "10px",
              }}
            >
              {[...Array(5)].map((_, starIndex) => (
                <img
                  key={starIndex}
                  style={{ width: "15px", marginRight: "5px" }}
                  src="../images/star.svg"
                  alt="star"
                />
              ))}
            </div>
            <h3 className="fw-bold">
              <i>
                "Working with EBSOFT on our telehealth platform was a pivotal
                experience. "
              </i>
            </h3>
            <p>
              Their comprehensive cloud and DevOps services streamlined our
              deployment processes, enabling us to scale rapidly during peak
              demand. The team’s dedication to optimizing our infrastructure
              resulted in a 60% decrease in downtime and significantly improved
              user experience. Their innovative solutions have empowered us to
              expand our reach and enhance patient care.
            </p>
            <div className="pt-3">
              <h4 className="fw-bold">CTO at HealthWise Solutions</h4>
              <p>Uche</p>
            </div>
          </div>
        </div>

        {/* Slide 4 */}
        <div className="slide-div">
          <div
            style={{
              textAlign: "center",
              paddingTop: "20px",
              textAlign: "center",
              backgroundColor: "#ECF4EF",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)", // Add box shadow
              borderRadius: "10px",
              width: "70%",
              padding: "55px 50px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto",
            }}
          >
            {/* Stars in a horizontal row */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "10px",
              }}
            >
              {[...Array(5)].map((_, starIndex) => (
                <img
                  key={starIndex}
                  style={{ width: "15px", marginRight: "5px" }}
                  src="../images/star.svg"
                  alt="star"
                />
              ))}
            </div>
            <h3 className="fw-bold ">
              <i>
                {" "}
                "Partnering with the EBSOFT team for our Cloud Digital
                Transformation was a game-changer"
              </i>
            </h3>
            <p>
              Their tailored solutions and expertise in cloud infrastructure
              significantly improved our performance, leading to a 40% reduction
              in operational costs and a 30% increase in productivity. We can
              now focus on creating value for our clients!
            </p>
            <div className="pt-3">
              <h4 className="fw-bold">CEO at Tech Innovations Inc.</h4>
              <p>Sarah Thompson</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default CarouselComponent;
