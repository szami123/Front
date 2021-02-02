import React, { Component } from 'react';

class Auta extends Component{


    render() {
        return (
            <div>
                <p>~~~~~~~~~~~~~~~~~~~~</p>
                <p>{this.props.info.id}</p>
                <p>{this.props.info.marka}</p>
                <p>{this.props.info.model}</p>
                <p>{this.props.info.productionYear}</p>
            </div>
        );
    }
}


export default Auta;
