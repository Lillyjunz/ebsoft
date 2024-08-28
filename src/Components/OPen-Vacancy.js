import { NavLink } from "react-router-dom";

const Open = () => {
  return (
    <>
      <div className="container open">
        <div className="d-flex pb-4 justify-content-between align-items-center">
          <li>
            <h4 className="fw-bold"> Data Engineer</h4>
            <li
              className="fw-bold"
              style={{ fontSize: "0.7rem", color: "gray", padding: "0" }}
            >
              REMOTE - CONTRACT
            </li>
            {/* <small className="text-primary">Read more</small> */}
            <small
              className="text-primary"
              style={{ cursor: "pointer" }}
              data-bs-toggle="modal"
              data-bs-target="#firstModal"
            >
              Read more..
            </small>

            {/* modal */}
            <div>
              <div
                className="modal fade"
                id="firstModal"
                tabIndex={-1}
                aria-labelledby="firstModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                    <div
                      className="modal-heade text-end"
                      style={{ padding: "20px" }}
                    >
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body pb-5 ps-5 pe-5">
                      FIRST ONE Lorem ipsum dolor sit, amet consectetur
                      adipisicing elit. Optio nihil necessitatibus dicta minus
                      ea incidunt ullam ex officia exercitationem, autem iusto
                      adipisci doloremque accusamus possimus mollitia nulla.
                      Accusantium, soluta porro Lorem ipsum, dolor sit amet
                      consectetur adipisicing elit. Ipsum nisi alias libero
                      totam fuga accusantium voluptatum dolorum! Repudiandae,
                      quos assumenda! Deleniti molestiae labore officia eius
                      ullam cum adipisci earum commodi Lorem ipsum dolor sit
                      amet consectetur adipisicing elit. Accusantium, nesciunt?
                      Amet id deserunt maxime dolorum, iste numquam adipisci
                      totam asperiores architecto, libero sed sunt voluptatem
                      omnis aliquid ducimus. Tempora, sint Lorem ipsum, dolor
                      sit amet consectetur adipisicing elit. Libero similique,
                      repellat, ut eligendi quibusdam id esse debitis nam
                      placeat odit cum, quasi quod. Cupiditate quasi rem, eaque
                      optio dolorem nihil.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <NavLink to="/appform">
            <li>
              <button className="btn btn-success text-light">Apply</button>
            </li>
          </NavLink>
        </div>

        <div className="d-flex pb-4 justify-content-between align-items-center">
          <li>
            <h4 className="fw-bold"> DevOPs Engineer</h4>
            <li
              className="fw-bold"
              style={{ fontSize: "0.7rem", color: "gray", padding: "0" }}
            >
              REMOTE - CONTRACT
            </li>
            <small
              className="text-primary"
              style={{ cursor: "pointer" }}
              data-bs-toggle="modal"
              data-bs-target="#secondModal"
            >
              Read more..
            </small>
            {/* modal */}
            <div>
              <div
                className="modal fade"
                id="secondModal"
                tabIndex={-1}
                aria-labelledby="secondModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                    <div
                      className="modal-heade text-end"
                      style={{ padding: "20px" }}
                    >
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body pb-5 ps-5 pe-5">
                      SECOND ONE Lorem ipsum dolor sit, amet consectetur
                      adipisicing elit. Optio nihil necessitatibus dicta minus
                      ea incidunt ullam ex officia exercitationem, autem iusto
                      adipisci doloremque accusamus possimus mollitia nulla.
                      Accusantium, soluta porro Lorem ipsum, dolor sit amet
                      consectetur adipisicing elit. Ipsum nisi alias libero
                      totam fuga accusantium voluptatum dolorum! Repudiandae,
                      quos assumenda! Deleniti molestiae labore officia eius
                      ullam cum adipisci earum commodi Lorem ipsum dolor sit
                      amet consectetur adipisicing elit. Accusantium, nesciunt?
                      Amet id deserunt maxime dolorum, iste numquam adipisci
                      totam asperiores architecto, libero sed sunt voluptatem
                      omnis aliquid ducimus. Tempora, sint Lorem ipsum, dolor
                      sit amet consectetur adipisicing elit. Libero similique,
                      repellat, ut eligendi quibusdam id esse debitis nam
                      placeat odit cum, quasi quod. Cupiditate quasi rem, eaque
                      optio dolorem nihil.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <NavLink to="/appform">
            <li>
              <button className="btn btn-success text-light">Apply</button>
            </li>
          </NavLink>
        </div>

        <div className="d-flex pb-4 justify-content-between align-items-center">
          <li>
            <h4 className="fw-bold"> Backend Software Engineer</h4>
            <li
              className="fw-bold"
              style={{ fontSize: "0.7rem", color: "gray", padding: "0" }}
            >
              REMOTE - CONTRACT
            </li>
            <small
              className="text-primary"
              style={{ cursor: "pointer" }}
              data-bs-toggle="modal"
              data-bs-target="#eightModal"
            >
              Read more..
            </small>
            {/* modal */}
            <div>
              <div
                className="modal fade"
                id="eightModal"
                tabIndex={-1}
                aria-labelledby="eightModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                    <div
                      className="modal-heade text-end"
                      style={{ padding: "20px" }}
                    >
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body pb-5 ps-5 pe-5">
                      SECOND ONE Lorem ipsum dolor sit, amet consectetur
                      adipisicing elit. Optio nihil necessitatibus dicta minus
                      ea incidunt ullam ex officia exercitationem, autem iusto
                      adipisci doloremque accusamus possimus mollitia nulla.
                      Accusantium, soluta porro Lorem ipsum, dolor sit amet
                      consectetur adipisicing elit. Ipsum nisi alias libero
                      totam fuga accusantium voluptatum dolorum! Repudiandae,
                      quos assumenda! Deleniti molestiae labore officia eius
                      ullam cum adipisci earum commodi Lorem ipsum dolor sit
                      amet consectetur adipisicing elit. Accusantium, nesciunt?
                      Amet id deserunt maxime dolorum, iste numquam adipisci
                      totam asperiores architecto, libero sed sunt voluptatem
                      omnis aliquid ducimus. Tempora, sint Lorem ipsum, dolor
                      sit amet consectetur adipisicing elit. Libero similique,
                      repellat, ut eligendi quibusdam id esse debitis nam
                      placeat odit cum, quasi quod. Cupiditate quasi rem, eaque
                      optio dolorem nihil.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <NavLink to="/appform">
            <li>
              <button className="btn btn-success text-light">Apply</button>
            </li>
          </NavLink>
        </div>

        <div className="d-flex pb-4 justify-content-between align-items-center">
          <li>
            <h4 className="fw-bold"> Frontend Software Engineer</h4>
            <li
              className="fw-bold"
              style={{ fontSize: "0.7rem", color: "gray", padding: "0" }}
            >
              REMOTE - CONTRACT
            </li>
            <small
              className="text-primary"
              style={{ cursor: "pointer" }}
              data-bs-toggle="modal"
              data-bs-target="#thirdModal"
            >
              Read more..
            </small>
            {/* modal */}
            <div>
              <div
                className="modal fade"
                id="thirdModal"
                tabIndex={-1}
                aria-labelledby="thirdModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                    <div
                      className="modal-heade text-end"
                      style={{ padding: "20px" }}
                    >
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body pb-5 ps-5 pe-5">
                      SECOND ONE Lorem ipsum dolor sit, amet consectetur
                      adipisicing elit. Optio nihil necessitatibus dicta minus
                      ea incidunt ullam ex officia exercitationem, autem iusto
                      adipisci doloremque accusamus possimus mollitia nulla.
                      Accusantium, soluta porro Lorem ipsum, dolor sit amet
                      consectetur adipisicing elit. Ipsum nisi alias libero
                      totam fuga accusantium voluptatum dolorum! Repudiandae,
                      quos assumenda! Deleniti molestiae labore officia eius
                      ullam cum adipisci earum commodi Lorem ipsum dolor sit
                      amet consectetur adipisicing elit. Accusantium, nesciunt?
                      Amet id deserunt maxime dolorum, iste numquam adipisci
                      totam asperiores architecto, libero sed sunt voluptatem
                      omnis aliquid ducimus. Tempora, sint Lorem ipsum, dolor
                      sit amet consectetur adipisicing elit. Libero similique,
                      repellat, ut eligendi quibusdam id esse debitis nam
                      placeat odit cum, quasi quod. Cupiditate quasi rem, eaque
                      optio dolorem nihil.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <NavLink to="/appform">
            <li>
              <button className="btn btn-success text-light">Apply</button>
            </li>
          </NavLink>
        </div>

        <div className="d-flex pb-4 justify-content-between align-items-center">
          <li>
            <h4 className="fw-bold">FullStack Developer</h4>
            <li
              className="fw-bold"
              style={{ fontSize: "0.7rem", color: "gray", padding: "0" }}
            >
              REMOTE - CONTRACT
            </li>
            <small
              className="text-primary"
              style={{ cursor: "pointer" }}
              data-bs-toggle="modal"
              data-bs-target="#fourthModal"
            >
              Read more..
            </small>
            {/* modal */}
            <div>
              <div
                className="modal fade"
                id="fourthModal"
                tabIndex={-1}
                aria-labelledby="fourthModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                    <div
                      className="modal-heade text-end"
                      style={{ padding: "20px" }}
                    >
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body pb-5 ps-5 pe-5">
                      SECOND ONE Lorem ipsum dolor sit, amet consectetur
                      adipisicing elit. Optio nihil necessitatibus dicta minus
                      ea incidunt ullam ex officia exercitationem, autem iusto
                      adipisci doloremque accusamus possimus mollitia nulla.
                      Accusantium, soluta porro Lorem ipsum, dolor sit amet
                      consectetur adipisicing elit. Ipsum nisi alias libero
                      totam fuga accusantium voluptatum dolorum! Repudiandae,
                      quos assumenda! Deleniti molestiae labore officia eius
                      ullam cum adipisci earum commodi Lorem ipsum dolor sit
                      amet consectetur adipisicing elit. Accusantium, nesciunt?
                      Amet id deserunt maxime dolorum, iste numquam adipisci
                      totam asperiores architecto, libero sed sunt voluptatem
                      omnis aliquid ducimus. Tempora, sint Lorem ipsum, dolor
                      sit amet consectetur adipisicing elit. Libero similique,
                      repellat, ut eligendi quibusdam id esse debitis nam
                      placeat odit cum, quasi quod. Cupiditate quasi rem, eaque
                      optio dolorem nihil.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <NavLink to="/appform">
            <li>
              <button className="btn btn-success text-light">Apply</button>
            </li>
          </NavLink>
        </div>

        <div className="d-flex pb-4 justify-content-between align-items-center">
          <li>
            <h4 className="fw-bold"> Junior Android Developer</h4>
            <li
              className="fw-bold"
              style={{ fontSize: "0.7rem", color: "gray", padding: "0" }}
            >
              REMOTE - CONTRACT
            </li>
            <small
              className="text-primary"
              style={{ cursor: "pointer" }}
              data-bs-toggle="modal"
              data-bs-target="#fifthModal"
            >
              Read more..
            </small>
            {/* modal */}
            <div>
              <div
                className="modal fade"
                id="fifthModal"
                tabIndex={-1}
                aria-labelledby="fifthModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                    <div
                      className="modal-heade text-end"
                      style={{ padding: "20px" }}
                    >
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body pb-5 ps-5 pe-5">
                      SECOND ONE Lorem ipsum dolor sit, amet consectetur
                      adipisicing elit. Optio nihil necessitatibus dicta minus
                      ea incidunt ullam ex officia exercitationem, autem iusto
                      adipisci doloremque accusamus possimus mollitia nulla.
                      Accusantium, soluta porro Lorem ipsum, dolor sit amet
                      consectetur adipisicing elit. Ipsum nisi alias libero
                      totam fuga accusantium voluptatum dolorum! Repudiandae,
                      quos assumenda! Deleniti molestiae labore officia eius
                      ullam cum adipisci earum commodi Lorem ipsum dolor sit
                      amet consectetur adipisicing elit. Accusantium, nesciunt?
                      Amet id deserunt maxime dolorum, iste numquam adipisci
                      totam asperiores architecto, libero sed sunt voluptatem
                      omnis aliquid ducimus. Tempora, sint Lorem ipsum, dolor
                      sit amet consectetur adipisicing elit. Libero similique,
                      repellat, ut eligendi quibusdam id esse debitis nam
                      placeat odit cum, quasi quod. Cupiditate quasi rem, eaque
                      optio dolorem nihil.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <NavLink to="/appform">
            <li>
              <button className="btn btn-success text-light">Apply</button>
            </li>
          </NavLink>
        </div>

        <div className="d-flex pb-4 justify-content-between align-items-center">
          <li>
            <h4 className="fw-bold"> Junior iOS Developer</h4>
            <li
              className="fw-bold"
              style={{ fontSize: "0.7rem", color: "gray", padding: "0" }}
            >
              REMOTE - CONTRACT
            </li>
            <small
              className="text-primary"
              style={{ cursor: "pointer" }}
              data-bs-toggle="modal"
              data-bs-target="#sixthModal"
            >
              Read more..
            </small>
            {/* modal */}
            <div>
              <div
                className="modal fade"
                id="sixthModal"
                tabIndex={-1}
                aria-labelledby="sixthModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                    <div
                      className="modal-heade text-end"
                      style={{ padding: "20px" }}
                    >
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body pb-5 ps-5 pe-5">
                      SECOND ONE Lorem ipsum dolor sit, amet consectetur
                      adipisicing elit. Optio nihil necessitatibus dicta minus
                      ea incidunt ullam ex officia exercitationem, autem iusto
                      adipisci doloremque accusamus possimus mollitia nulla.
                      Accusantium, soluta porro Lorem ipsum, dolor sit amet
                      consectetur adipisicing elit. Ipsum nisi alias libero
                      totam fuga accusantium voluptatum dolorum! Repudiandae,
                      quos assumenda! Deleniti molestiae labore officia eius
                      ullam cum adipisci earum commodi Lorem ipsum dolor sit
                      amet consectetur adipisicing elit. Accusantium, nesciunt?
                      Amet id deserunt maxime dolorum, iste numquam adipisci
                      totam asperiores architecto, libero sed sunt voluptatem
                      omnis aliquid ducimus. Tempora, sint Lorem ipsum, dolor
                      sit amet consectetur adipisicing elit. Libero similique,
                      repellat, ut eligendi quibusdam id esse debitis nam
                      placeat odit cum, quasi quod. Cupiditate quasi rem, eaque
                      optio dolorem nihil.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <NavLink to="/appform">
            <li>
              <button className="btn btn-success text-light">Apply</button>
            </li>
          </NavLink>
        </div>

        <div className="d-flex pb-4 justify-content-between align-items-center">
          <li>
            <h4 className="fw-bold"> HR Personnel/Payroll</h4>
            <li
              className="fw-bold"
              style={{ fontSize: "0.7rem", color: "gray", padding: "0" }}
            >
              REMOTE - CONTRACT
            </li>
            <small
              className="text-primary"
              style={{ cursor: "pointer" }}
              data-bs-toggle="modal"
              data-bs-target="#seventhModal"
            >
              Read more..
            </small>
            {/* modal */}
            <div>
              <div
                className="modal fade"
                id="seventhModal"
                tabIndex={-1}
                aria-labelledby="seventhModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                    <div
                      className="modal-heade text-end"
                      style={{ padding: "20px" }}
                    >
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body pb-5 ps-5 pe-5">
                      SECOND ONE Lorem ipsum dolor sit, amet consectetur
                      adipisicing elit. Optio nihil necessitatibus dicta minus
                      ea incidunt ullam ex officia exercitationem, autem iusto
                      adipisci doloremque accusamus possimus mollitia nulla.
                      Accusantium, soluta porro Lorem ipsum, dolor sit amet
                      consectetur adipisicing elit. Ipsum nisi alias libero
                      totam fuga accusantium voluptatum dolorum! Repudiandae,
                      quos assumenda! Deleniti molestiae labore officia eius
                      ullam cum adipisci earum commodi Lorem ipsum dolor sit
                      amet consectetur adipisicing elit. Accusantium, nesciunt?
                      Amet id deserunt maxime dolorum, iste numquam adipisci
                      totam asperiores architecto, libero sed sunt voluptatem
                      omnis aliquid ducimus. Tempora, sint Lorem ipsum, dolor
                      sit amet consectetur adipisicing elit. Libero similique,
                      repellat, ut eligendi quibusdam id esse debitis nam
                      placeat odit cum, quasi quod. Cupiditate quasi rem, eaque
                      optio dolorem nihil.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <NavLink to="/appform">
            <li>
              <button className="btn btn-success text-light">Apply</button>
            </li>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Open;
