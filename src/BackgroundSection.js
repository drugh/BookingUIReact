import hike4 from "./resurse-statice/images/hike4.jpg"
import "./BackgroundSection.css"

function BackgroundSection() {

    return (
        <div className="bgSection">
            <div className="overlay">
                <img src={hike4} alt="poza4" />
            </div>
        </div>
    );
}

export default BackgroundSection;