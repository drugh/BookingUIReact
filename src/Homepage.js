import SimpleSlider from "./Carousel";
import Header from "./Header";
import "./Homepage.css"
import Block1 from "./Block1.js"
import Block2 from "./Block2.js"
import Block3 from "./Block3.js"
import Block4 from "./Block4.js"
import { faHiking } from '@fortawesome/free-solid-svg-icons'
import { faMountain } from '@fortawesome/free-solid-svg-icons'
import { faCampground } from '@fortawesome/free-solid-svg-icons'
import { faChild } from '@fortawesome/free-solid-svg-icons'
import BackgroundSection from "./BackgroundSection";
import Footer from "./Footer";

function Homepage () {

    
    return (
        <div className="homepage">
            <Header />
            <SimpleSlider />
            <div className="blocks-container">
                <div className="block">
                    <Block1 icon={faHiking} title="BACKPACKING TRIPS" description="lorem"/>
                </div>
                <div className="block">                    
                    <Block2 className="block" icon={faMountain} title="DAY HIKES" description="lorem"/>
                </div>
                <div className="block">                    
                    <Block3 className="block" icon={faCampground} title="CAMPING TOURS" description="lorem"/>
                </div>
                <div className="block">                    
                    <Block4 className="block" icon={faChild} title="FAMILY FRIENDLY" description="lorem"/>
                </div>
            </div>

            <BackgroundSection />
            <Footer />
        </div>
    );
}

export default Homepage;

