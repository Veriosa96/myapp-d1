import React from "react";

class ImgComponent extends React.Component{
    render(){
        return(
            <img src={this.props.image} alt={this.props.linkAlt} style={{borderRadius: this.props.borderRadius + "em"}} />
            )
            ;
    }
}

export default ImgComponent