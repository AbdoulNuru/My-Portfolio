import React from 'react';

const Loading = () =>{
    return (
        <>
        <div className="shadow2">
            <img alt="gify" src={process.env.PUBLIC_URL + "/img/loading gif.gif"} className="adl"/>
        </div>
        
        </>
    )
}

export default Loading;