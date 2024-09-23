import React, { useEffect } from "react";

function Faq() {
  useEffect(() => {
    const handleMouseEnter = function () {
      this.classList.add("active");
    };

    const handleMouseLeave = function () {
      this.classList.remove("active");
    };

    const accordions = document.getElementsByClassName("contentBx");
    for (let i = 0; i < accordions.length; i++) {
      accordions[i].addEventListener("mouseenter", handleMouseEnter);
      accordions[i].addEventListener("mouseleave", handleMouseLeave);
    }

    // Cleanup: Remove event listeners when component unmounts
    return () => {
      for (let i = 0; i < accordions.length; i++) {
        accordions[i].removeEventListener("mouseenter", handleMouseEnter);
        accordions[i].removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []); // Empty dependency array means this effect runs only once, similar to componentDidMount

  return (
    <div
      className=" container"
      style={{ marginTop: "140px", marginBottom: "170px" }}
    >
      <h1
        className="fw-bold ps-3 pb-2 faq  text-success"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="1300"
        data-aos-once="true"
      >
        FAQ
      </h1>
      <div className="accordion">
        <div
          className="contentBx "
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1600"
          data-aos-once="true"
        >
          <div className="label fw-bold"> 1. What makes us unique ?</div>
          <div className="content" style={{ border: "2px solid #f1f1f1" }}>
            <p>
              What sets us apart in handling your visionary project is our
              unwavering commitment to excellence and brilliance. Our team
              delivers application codes to clients with exceptionalism, we
              operate within the confines of your hosting platform, prioritizing
              security at every step. Trust in the expertise of our engineering
              advisory team to provide cost-effective platform and hosting
              solutions tailored to your needs.
            </p>
          </div>
        </div>
      </div>

      <div className="accordion">
        <div
          className="contentBx "
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1700"
          data-aos-once="true"
        >
          <div className="label fw-bold">
            {" "}
            2. What our clients says about us
          </div>
          <div className="content" style={{ border: "2px solid #f1f1f1" }}>
            <p>
              We are deeply committed to addressing your software development
              challenges and demystifying the complexities surrounding startup
              or enterprise application/software lifecycle and platform
              operations. Our focus is on delivering viable real solutions
              tailored to your target market, ensuring the success of your
              project from development to delivery.
            </p>
          </div>
        </div>
      </div>

      <div className="accordion">
        <div
          className="contentBx "
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1900"
          data-aos-once="true"
        >
          <div className="label fw-bold">
            {" "}
            3. How does ebsofT ensure skilled team integration and confident KPI
            delegation?
          </div>
          <div className="content" style={{ border: "2px solid #f1f1f1" }}>
            <p>
              We invest in our team through year-round certified training
              programs and personnel development initiatives to cultivate
              excellence and brilliance with leadership. Picture our highly
              skilled team seamlessly integrating into your existing projects,
              fully committed to its success. With us, you can confidently
              delegate KPIs concerns, knowing they're in capable hands.
            </p>
          </div>
        </div>
      </div>

      <div className="accordion">
        <div
          className="contentBx "
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="2100"
          data-aos-once="true"
        >
          <div className="label fw-bold">
            {" "}
            4. What approach does ebsofT follow in software development, and how
            does it ensure confidentiality and timely delivery?
          </div>
          <div className="content" style={{ border: "2px solid #f1f1f1" }}>
            <p>
              At ebsofT, we adhere to a proven Agile Development Methodology
              that encompasses the entire product lifecycle across a
              comprehensive range of software services. Recognizing the
              uniqueness of every business, we offer flexible, customized, and
              personalized outsourcing solutions while ensuring the utmost
              confidentiality of sensitive business data and delivering projects
              on time and within budget.
            </p>
          </div>
        </div>
      </div>

      <div className="accordion">
        <div
          className="contentBx "
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="2300"
          data-aos-once="true"
        >
          <div className="label fw-bold">
            {" "}
            5. How does ebsoft ensure data privacy for remote engineers?
          </div>
          <div className="content" style={{ border: "2px solid #f1f1f1" }}>
            <p>
              At ebsoft, we ensure data privacy for remote engineers through
              encrypted communication, secure access controls, and regular
              training. We monitor data access rigorously and comply with
              industry regulations like GDPR and HIPAA to keep sensitive
              information secure.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="accordion">
        <div
          className="contentBx "
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="2500"
          data-aos-once="true"
        >
          <div className="label fw-bold">
            {" "}
            6. How do I know if ene to end development is right for me
          </div>
          <div className="content" style={{ border: "2px solid #f1f1f1" }}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              sunt mollitia obcaecati voluptas quaerat provident, ipsam nulla
              aliquid modi asperiores alias aspernatur beatae, tenetur dicta
              maxime impedit ipsa? Porro, perspiciatis!
            </p>
          </div>
        </div>
      </div> */}

      {/* <div className="accordion">
        <div
          className="contentBx "
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="2700"
          data-aos-once="true"
        >
          <div className="label fw-bold">
            {" "}
            7. How do I know if ene to end development is right for me
          </div>
          <div className="content" style={{ border: "2px solid #f1f1f1" }}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              sunt mollitia obcaecati voluptas quaerat provident, ipsam nulla
              aliquid modi asperiores alias aspernatur beatae, tenetur dicta
              maxime impedit ipsa? Porro, perspiciatis!
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Faq;
