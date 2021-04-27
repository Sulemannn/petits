import React from 'react';
import Winner from "../assets/pic/winner.gif"


class Victory extends React.Component {

    render() {

        return (
            
            <div 
            className="offset-3" 
            style={{ background: `url(${Winner})`, 
            height: `${500}px`, 
            backgroundRepeat: "no-repeat" }}>

            </div>
        )

    }
}

export default Victory;