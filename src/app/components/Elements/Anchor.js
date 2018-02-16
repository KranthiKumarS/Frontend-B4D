import React from "react";
export default class Anchor extends React.Component{
    render(){
        return(
            <a href={this.props.linkurl} 
            target={this.props.linktarget}
            id={this.props.id}
            className={this.props.className} 
            title={this.props.linktitle}>{this.props.children}</a>
        )
    }
}