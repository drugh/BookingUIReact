import "./Footer.css"

function Footer() {
    let date = new Date(Date.now()).getFullYear();

    return (
        <div className="footer">
            <div className="company">
                <p><strong>HIKEBUDDY {date}</strong></p>

            </div>
            <div className="info">
                <p><strong>More info</strong></p>
                <ul className="list">
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;