import React from "react"
export default class From extends React.Component{
    render(){
        return(
            <from className={this.props.className} 
            action={this.props.action} 
            id={this.props.id} 
            method={this.props.method}>
            {this.props.children}
            </from>
        )
    }
}