import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import mainImage from '/src/assets/main.png';
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={`${styles.bg__content} text-white p-5`}>
      <div className="container">
        <div className="d-flex flex-column align-items-center justify-content-center p-2">
          <img
            className="w-25 img-fluid"
            src={mainImage}
            alt="mainpic"
          />
        </div>
        <div className="text-center p-2">
          <h1 className={`${styles.header__font} text-uppercase fw-bold`}>
            Start Framework
          </h1>
        </div>

        <div className="d-flex justify-content-center align-items-center p-2">
          <div className={`${styles.line__art} bg-white mx-3`}></div>
          <FontAwesomeIcon icon={faStar} />
          <div className={`${styles.line__art} bg-white mx-3`}></div>
        </div>
        <div className="text-center p-2">
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </div>
  );
}
