import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="w-100 m-0 p-0">
      <div className="bg-main text-white p-5">
        <div className="row">
          <div className="col-md-4 text-center my-3">
            <h3 className="text-uppercase">Location</h3>
            <p className="">2215 John Daniel Drive</p>
            <p className="">Clark, MO 65243</p>
          </div>
          <div className="col-md-4 text-center my-3">
            <h3 className="text-uppercase">Around The Web</h3>
            <ul className="list-inline">
              <li className="list-inline-item mx-2">
                <a href="#" className="text-white">
                  <FontAwesomeIcon
                    className="icon-art fa-xl"
                    icon={faFacebookF}
                  />
                </a>
              </li>
              <li className="list-inline-item mx-2">
                <a href="#" className="text-white">
                  <FontAwesomeIcon
                    className="icon-art fa-xl"
                    icon={faTwitter}
                  />
                </a>
              </li>
              <li className="list-inline-item mx-2">
                <a href="#" className="text-white">
                  <FontAwesomeIcon
                    className="icon-art fa-xl"
                    icon={faLinkedinIn}
                  />
                </a>
              </li>
              <li className="list-inline-item mx-2">
                <a href="#" className="text-white">
                  <FontAwesomeIcon className="icon-art fa-xl" icon={faGlobe} />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 text-center my-3">
            <h3 className="text-uppercase">about freelancer</h3>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </div>
      <div className="bg-bottom-footer text-white p-3 ">
        <p className="text-center m-0">
          Copyright © ReactJS - Bassem Al-Abyad 2025
        </p>
      </div>
    </footer>
  );
}
