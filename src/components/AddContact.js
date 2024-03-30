import React from 'react';

class AddContact extends React.Component {

    state = {
        name: "",
        email: "",
        phone: ""
    };

    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" && this.state.email === "" && this.state.phone === "") {
            alert("All the fields are mandatory")
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({ name: "", email: "", phone: "" });
    }

    render() {
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" value={this.state.name} placeholder="name" onChange={(e) => this.setState({ name: e.target.value })}></input>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" value={this.state.email} placeholder="email" onChange={(e) => this.setState({ email: e.target.value })}></input>
                    </div>
                    <div className="field">
                        <label>Mobile Number</label>
                        <input type="text" name="number" value={this.state.phone} placeholder="number" onChange={(e) => this.setState({ phone: e.target.value })}></input>
                    </div>
                    <button className="ui button blue">Submit</button>
                </form>
            </div>
        );
    }
}

export default AddContact;