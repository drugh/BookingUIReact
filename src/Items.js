import React from "react";
import "./Items.css"

class Items extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fullname: "",
            date_from: "",
            date_to: "",
            phone: ""
        }

    }


    render() {
        return (
            <div className="table">
                <table>
                    <tr>
                        <th>Full name</th>
                        <td>Booking1</td>
                        <td>Booking1</td>
                    </tr>
                    <tr>
                        <th>Date from</th>
                        <td>Booking1</td>
                        <td>Booking1</td>
                    </tr>
                    <tr>
                        <th>Date to</th>
                        <td>Booking1</td>
                        <td>Booking1</td>
                    </tr>
                    <tr>
                        <th>Phone</th>
                        <td>Booking1</td>
                        <td>Booking1</td>
                    </tr>
                </table>
            </div>
        );
    };
}

export default Items;