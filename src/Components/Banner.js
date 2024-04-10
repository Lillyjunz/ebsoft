const Banner = () => {
  return (
    <>
      <section className="banner">
        <div className="banner pt-3">
          <h2 className="text-center">
            <span className="text-success">Visualize.</span>
            <span className="text-primary">Design.</span>
            <span className="text-white">Build.</span>
            <span style={{ color: "orangeRed" }}>Deliver</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            cupiditate molestias asperiores assumenda hic impedit natus voluptas
            ratione deserunt amet architecto, eum earum quam at illum nemo?
            Quidem, eaque provident?
          </p>
        </div>

        <div className="text-center">
          <img className="img-fluid" src="./images/ann.gif" />
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="wave"
        >
          <path
            fill="#000"
            fill-opacity="1"
            d="M0,192L80,208C160,224,320,256,480,234.7C640,213,800,139,960,122.7C1120,107,1280,149,1360,170.7L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </section>
    </>
  );
};

export default Banner;
