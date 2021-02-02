import React, { Component } from 'react';

import Auta from "./Auta";
class App extends Component{

    state =
        {
            data: [],
            name:"xd"


        }

    componentDidMount() {
        fetch('http://localhost:9090/api/danes/all')
            .then(response => response.json())
            .then(data => {
                    console.log(data);
                    this.setState({ data })
                }
            );
    }

    render() {
        return (
            <div>
                {this.state.data.map(auto => <Auta info={auto}/>)}
            </div>
        );
    }
}


export default App;
