import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPlus } from "@fortawesome/free-solid-svg-icons";

function getImageUrl(name) {
  return new URL(`/src/assets/${name}.png`, import.meta.url).href;
}

export default function Portfolio() {
  const [modalImageUrl, setModalImageUrl] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const portfolioItems = [
    { id: 1, name: "cottage", alt: "Cottage", title: "Cottage" },
    { id: 2, name: "cake", alt: "Cake", title: "Cake" },
    { id: 3, name: "tent", alt: "Tent", title: "Tent" },
    { id: 4, name: "game", alt: "Game", title: "Game" },
    { id: 5, name: "safe", alt: "Safe", title: "Safe" },
    { id: 6, name: "submarine", alt: "Submarine", title: "Submarine" },
  ];

  const handleImageClick = (imageUrl, itemTitle) => {
    setModalImageUrl(imageUrl);
    setModalTitle(itemTitle);
  };

  return (
    <>
      <div className="p-5">
        <div className="container">
          <div className="text-center p-2">
            <h1 className="text-uppercase header-font fw-bold">
              Portfolio Component
            </h1>
          </div>
          <div className="d-flex justify-content-center align-items-center p-2">
            <div className="line-dark mx-3"></div>
            <FontAwesomeIcon icon={faStar} />
            <div className="line-dark mx-3"></div>
          </div>
          <div className="row py-5 g-5">
            {portfolioItems.map((item) => (
              <div className="col-lg-4 col-md-6" key={item.id}>
                <div
                  className="rounded-3 overflow-hidden position-relative"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    handleImageClick(getImageUrl(item.name), item.title)
                  }
                >
                  <img
                    className="img-fluid"
                    src={getImageUrl(item.name)}
                    alt={item.alt}
                  />
                  <div className="portfolio-layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon
                      className="fa-6x text-white"
                      icon={faPlus}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        data-bs-theme="dark"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {modalTitle}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src={modalImageUrl}
                alt="Portfolio Item"
                className="img-fluid"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-main"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
