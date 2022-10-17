import React, {Component} from "react";

export default class Cont extends Component{
    state ={
        numero: this.props.numero
    }
    MaisUm = () => {
        this.setState({numero: this.state.numero + 1})
    }
    render(){
        return(
            <div>
                <span>Número: {this.state.numero}</span>
                <button onClick={this.MaisUm}>Incremento</button>
            </div>
        )
    }
}