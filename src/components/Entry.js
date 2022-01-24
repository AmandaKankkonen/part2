import React from "react"


class Entry extends React.Component{
    render(){

        return(
            <div>
                <p>{this.props.name} {this.props.phone}</p>
            </div>
        )
    }
}

export default Entry