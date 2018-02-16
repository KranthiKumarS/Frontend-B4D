import React from "react"
export default class Input extends React.Component{
    render(){
        return(
           <input type={this.props.type} 
           id={this.props.id} 
           placeholder={this.props.placeholder} 
           name={this.props.name} 
           value={this.props.value} 
           size={this.props.size}
           className={this.props.className} 
           maxlength={this.props.maxlength} 
           autocomplete={this.props.autocomplete}/>
        )
    }
}