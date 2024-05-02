import React from "react";

class Whatsup extends React.Component{
    render() {
        return (
            <div>
            <h1>Whatsup {this.props.name}</h1>
            {this.props.children}
            </div>
        );
    }
}

export default Whatsup;