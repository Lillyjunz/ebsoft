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
          data-aos-delay="1500"
          data-aos-once="true"
        >
          <div className="label fw-bold">
            {" "}
            1. How do I know if ene to end development is right for me
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
            2. How do I know if ene to end development is right for me
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
            3. How do I know if ene to end development is right for me
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
            4. How do I know if ene to end development is right for me
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
            5. How do I know if ene to end development is right for me
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
      </div>

      <div className="accordion">
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
      </div>

      <div className="accordion">
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
      </div>
    </div>
  );
}

export default Faq;
