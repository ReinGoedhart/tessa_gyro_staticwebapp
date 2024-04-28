import LesGeven from "../img/Lesgeven.jpg";
import LesGeven2 from "../img/Lesgeven2.jpg";
import LesGeven3 from "../img/Lesgeven3.jpg";
import LesGeven4 from "../img/Lesgeven4.jpg";

export default function ImageGallery() {
  return (
    <>
      <div className="gallery-container">
        <div className="grid-even-columns">
          <img className="flow" src={LesGeven} alt="" />
          <img className="flow" src={LesGeven2} alt="" />
          <img className="flow" src={LesGeven3} alt="" />
          <img className="flow" src={LesGeven4} alt="" />
        </div>
      </div>
    </>
  );
}
