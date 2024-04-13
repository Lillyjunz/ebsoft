import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />

      <div className="d-flex justify-content-between ">
        <div
          style={{
            width: "800px",
            marginRight: "20px",
            marginLeft: "40px",
            marginTop: "20px",
          }}
        >
          <h3>Contact Us</h3>
          <li className="mb-5" style={{ listStyleType: "none" }}>
            Ebsoft would like to know how we may help
          </li>
          <div className="row">
            <div className="col-6">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label ">
                  First name
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  style={{ background: "#f1f1f1" }}
                />
              </div>
            </div>
            <div className="col-6">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Last name
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  style={{ background: "#f1f1f1" }}
                />
              </div>
            </div>

            <div className="col-6">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  style={{ background: "#f1f1f1" }}
                />
              </div>
            </div>

            <div className="col-6">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  style={{ background: "#f1f1f1" }}
                />
              </div>
            </div>

            <div className="col-12">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  style={{ background: "#f1f1f1" }}
                />
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Example textarea
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              style={{ background: "#f1f1f1" }}
            ></textarea>
          </div>
          <div className="col-12 mb-5 py-2">
            <select
              class="form-select py-3"
              aria-label="Default select example"
              style={{ background: "#f1f1f1" }}
            >
              <option selected>Engagement model</option>
              <option value="1">Complete End-to-End Development</option>
              <option value="2">Partial End-to-End Development</option>
              <option value="3">Unsure</option>
            </select>
          </div>
          <div className="d-flex justify-content-between">
            <div className="bg-danger">hyu</div>
            <button className="btn btn-success p-2 ps-3 pe-3">Submit</button>
          </div>
        </div>

        <div style={{ backgroundColor: "#89E0AE", width: "800px" }}>
          <div style={{ margin: "30% 10%" }}>
            <i class="bi bi-star-fill text-warning "></i>
            <i class="bi bi-star-fill text-warning"></i>
            <i class="bi bi-star-fill text-warning"></i>
            <i class="bi bi-star-fill text-warning"></i>
            <i class="bi bi-star-fill text-warning"></i>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
              alias saepe dolor architecto. Veniam maiores ipsa, ut nam dicta
              cumque labore minus soluta illum laborum animi pariatur deserunt
              mollitia commodi.
            </p>
            <p>Jogn Jackson</p>
            Head of Department
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#89E0AE",
          padding: "50px",
          marginTop: "90px",
          width: "900px",
          textAlign: "center",
          marginLeft: "20%",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.6)",
          marginBottom: "100px",
        }}
      >
        <i class="bi bi-star-fill text-warning "></i>
        <i class="bi bi-star-fill text-warning"></i>
        <i class="bi bi-star-fill text-warning"></i>
        <i class="bi bi-star-fill text-warning"></i>
        <i class="bi bi-star-fill text-warning"></i>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque,
          sint.
        </p>
      </div>

      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Launch static backdrop modal
      </button>

      <div
        class="modal fade modal-dialog modal-dialog-centered"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div
              class="modal-body"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  borderRadius: "50%",
                  width: "100px",
                  height: "100px",
                  backgroundColor: "#89E0AE",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h2>
                  {" "}
                  <i class="bi bi-check2 text-success"></i>
                </h2>
              </div>
            </div>
            <h4 className="text-center">Successful</h4>
            <small className="text-center pb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae minima provident accusantium fuga iste beatae suscipit?
            </small>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Contact;
