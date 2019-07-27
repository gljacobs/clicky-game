import React from "react";
import "./style.css";

function GameImg(props) {
    var styles = {
        display: "block",
        height: "150px",
        margin: "15px 55px",
        width: "120px"
    }
    return (
        <img 
            className="game-img"
            alt={props.name} 
            src={props.image} 
            style={styles} 
            id={props.id}
            onClick={props.handleClick}
        />
    );
}

export default GameImg;