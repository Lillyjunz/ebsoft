const Modal = () => {
  return (
    <>
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
    </>
  );
};

export default Modal;
