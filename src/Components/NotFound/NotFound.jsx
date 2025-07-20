import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function NotFound() {
  return (
    <div className="p-5">
      <div className="container">
        <div className="my-5">
          <div className="text-center p-2">
            <h1 className="text-uppercase header-font fw-bold">404, oops!</h1>
          </div>
          <div className="d-flex justify-content-center align-items-center p-2">
            <div className="line-dark mx-3"></div>
            <FontAwesomeIcon icon={faStar} />
            <div className="line-dark mx-3"></div>
          </div>
          <div className="text-center p-2">
            <p>
              Wrong Turn! Page is not found. Please check the URL or return to{" "}
              <a className="main-color" href="/">
                Home Page
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
