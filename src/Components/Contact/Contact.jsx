import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <div className="p-5">
      <div className="container w-50">
        <div className="text-center p-2">
          <h1 className="text-uppercase header-font fw-bold">
            Contact Section
          </h1>
        </div>
        <div className="d-flex justify-content-center align-items-center p-2">
          <div className="line-dark mx-3"></div>
          <FontAwesomeIcon icon={faStar} />
          <div className="line-dark mx-3"></div>
        </div>
        <form action="submit" method="post">
          <div className="form-group d-flex flex-column align-items-center">
            <input
              type="text"
              className="form-control my-2"
              id="name"
              placeholder="Name"
              name="name"
              autocomplete="name"
            />
            <input
              type="number"
              className="form-control my-2"
              id="age"
              placeholder="Age"
              name="age"
              autocomplete="off"
            />
            <input
              type="email"
              className="form-control my-2"
              id="email"
              placeholder="Email"
              name="email"
              autocomplete="email"
            />
            <input
              type="password"
              className="form-control my-2"
              id="password"
              placeholder="Password"
              name="password"
              autocomplete="new-password"
            />
            <button
              className="btn btn-main align-self-start my-2"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
