import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <div className="bg-content text-white p-5">
      <div className="container">
        <div className="my-5">
          <div className="text-center p-2">
            <h1 className="text-uppercase header-font fw-bold">
              About Component
            </h1>
          </div>
          <div className="d-flex justify-content-center align-items-center p-2">
            <div className="line bg-white mx-3"></div>
            <FontAwesomeIcon icon={faStar} />
            <div className="line bg-white mx-3"></div>
          </div>
          <div className="row my-3">
            <div className="col-md-6 gx-0">
              <p className="text-justify">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-6 gx-0">
              <p className="text-justify">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
