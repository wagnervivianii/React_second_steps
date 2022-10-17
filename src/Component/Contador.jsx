import React, {Component} from "react";

export default class Contador extends Component{

    MaisUm = () =>{
        console.log(this)
        //this.props.numero ++;
    }

    render() {
        return (
            <div>
                <span>Número: {this.props.numero}</span>
                <button  onClick= {this.MaisUm}></button>
            </div>
        )
    }
}
   
