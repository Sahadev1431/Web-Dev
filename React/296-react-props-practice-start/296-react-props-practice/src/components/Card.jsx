import React from "react";

export default function Card(props) {
    return (

        <div className="card">
            <div className="top">
                {/* <p>{props.propKey}</p> */}
                <h2 className="name">{props.name}</h2>
                <img className="circle-img"
                    src={props.imgURL}
                    alt="avatar_img"
                />
            </div>
            <div className="bottom">
                <p className="info">{props.phone}</p>
                <p className="info">{props.email}</p>
            </div>
        </div>
    )
}