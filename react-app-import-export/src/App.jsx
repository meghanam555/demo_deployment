import {Component} from "react";
export default class App extends Component{
    render(){
        return(
            <div>
            <h1>Hlo Everybody</h1>
            <h2>Had Your Coffee</h2>
            </div>
        )
    }
}

export function Content1(){
    return(
        <h1>Had Your Tea Atleast</h1>
    )
}

export function Content2(){
    return(
        <h2>Good Eveneing</h2>
    )
}

export const name = "Megha";