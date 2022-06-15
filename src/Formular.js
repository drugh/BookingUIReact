import React from "react";
import "./Formular.css"

class Formular extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fullname: "",
            date_from: "",
            date_to: "",
            phone: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDateFromChange = this.handleDateFromChange.bind(this);
        this.handleDateToChange = this.handleDateToChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        
    }

    handleSubmit(e) {
        e.preventDefault();
        fetch("/test",
            {
                method: "POST",
                data: this.state
            }
        )
        .then(r => r.json())
        .then(data => {
            console.log(data);
        });
    }

    handleNameChange(e) {
        let newValue = e.target.value;
        this.setState(() => ({ fullname: newValue }));
    }

    handleDateFromChange(e) {
        let newValue = e.target.value;
        this.setState(() => ({ date_from: newValue }));
    }

    handleDateToChange(e) {
        let newValue = e.target.value;
        this.setState(() => ({ date_to: newValue }));
    }

    handlePhoneChange(e) {
        let newValue = e.target.value;
        this.setState(() => ({ phone: newValue }));
    }
    

    render() {
        return (        
            <div>
                <form className="formular" method="POST">
                    <label>Full name:</label>
                    <input name="fullname" id="name" type="text" value={this.state.fullname} onChange={this.handleNameChange} required></input>

                    <label>Date from:</label>
                    <input name="date_from" id="date-from" type="date" value={this.state.date_from} onChange={this.handleDateFromChange} required></input>

                    <label>Date to:</label>
                    <input name="date_to" id="date-to" type="date" value={this.state.date_to} onChange={this.handleDateToChange} required></input>

                    <label>Phone number:</label>
                    <input name="phone" id="phone" type="text" value={this.state.phone} onChange={this.handlePhoneChange} required></input>

                    <button id="send" type="submit" onSubmit={this.handleSubmit}>Send booking</button>
                </form>
            </div>
        );
    }
}

export default Formular;