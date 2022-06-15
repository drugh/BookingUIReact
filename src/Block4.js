import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./block.css"


function Block4(props) {
    

    return (
        <div>
            <div className="icon">
                <FontAwesomeIcon icon={props.icon} />
            </div>
            <div className="title">
                <h1>{props.title}</h1>
            </div>
            <div className="description">
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default Block4;