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
        var dataToCopy = {}
            // mapObj[inspectedId]
        var tiles = []
        Object.assign(dataToCopy, mapObj[inspectedId])
        Object.assign(tiles, mapObj)
        console.log("dataToCopy")
        console.log(dataToCopy)
        console.log("tiles")
        console.log(tiles)
        const tempId = tiles[clickedId].id
        console.log("tempId")
        console.log(tempId)
        tiles[clickedId] = dataToCopy
        tiles[clickedId].id = tempId
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