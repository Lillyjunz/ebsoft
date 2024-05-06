const Modal = () => {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Launch static backdrop modal
      </button>

      <div
        className="modal fade modal-dialog modal-dialog-centered"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div
              className="modal-body"
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
                  <i className="bi bi-check2 text-success"></i>
                </h2>
              </div>
            </div>
            <h4 classNameName="text-center">Successful</h4>
            <small classNameName="text-center pb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae minima provident accusantium fuga iste beatae suscipit?
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
