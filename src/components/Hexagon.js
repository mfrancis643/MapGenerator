import React from "react";

const Hexagon = ({parOnClick, id, tileData, inspectedId}) => {

    const rows = 30
    const columns =30


    let styles = {
        hex: {
            stroke: "#000000",
            strokeWidth: "3px"
        }
    }

    let oddRowCheck = () => {
        (id % 2) === 0 ? styles.hex.paddingTop = "0px" : styles.hex.paddingTop="25px"
    }

    if (id === inspectedId){
        styles.hex.stroke = "red"
    }

    let typeCheck = () => {

        switch (tileData.type){
            case "grass":
                styles.hex.fill = "green"
                break
            case "wall":
                styles.hex.fill = "saddleBrown"
                break
            case "water":
                styles.hex.fill = "blue"
                break
        }

    }

    oddRowCheck()
    typeCheck()

    let vertices1 = "38,0,12,0"
    let vertices2 = "12,0,0,22"
    let vertices3 = "0,22,13,44"
    let vertices4 = "13,44,37,44"
    let vertices5 = "37,44,50,22"
    let vertices6 = "50,22,38,0"

    return (
        <svg style={styles.hex} className={'hexagon'}  id="color-fill" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="50">
            <polygon style={{paddingLeft:"2px"}} onClick={() => {parOnClick(id)}} points={vertices1 + ',' + vertices2 + ',' + vertices3 + ',' + vertices4 + ',' + vertices5 + ',' + vertices6}></polygon>

        </svg>
        // <div style={{color: "red", width: id}} key={id} onClick={() => {parOnClick(id)}}>Hex </div>
    );
}
export default Hexagon