import React, {useEffect} from "react";
import Hexagon from "./Hexagon";
import HeadBanner from "../HeadBanner";
import styles from '../styles.css'

const MapWrapper = ({mapObj, setMapObj, setInspectedId, inspectedId, applyToggled}) => {

    const hexClick = (nullableClickedId) => {
        console.log("nullableClickedId")
        console.log(nullableClickedId)
        if (applyToggled){
            return applyToggledTile(nullableClickedId)
        }
        else{
            return setInspectedId(nullableClickedId)
        }
    }

    let applyToggledTile = (clickedId) => {
        let dataToCopy = mapObj[inspectedId]
        let tiles = [...mapObj]
        tiles[clickedId] = dataToCopy
        setMapObj(tiles);
    }
    
    useEffect(()=>{
        console.log("mapObj")
        console.log(mapObj)
    }, [mapObj])

    return (
        <>
            <HeadBanner/>
            <div className={'grid-container'} id={'myHexGrid'}>
                {
                    mapObj.map((tile,id) => {
                        return(
                            <div className={'grid-item'}>
                                <Hexagon
                                    inspectedId={inspectedId}
                                    parOnClick={(id) => hexClick(id)}
                                    tileData={tile}
                                    id={id}

                                />

                            </div>
                        )
                    })
                }
                <p></p>
                <p></p>
            </div>
            <p></p>
        </>
    )
};

export default MapWrapper