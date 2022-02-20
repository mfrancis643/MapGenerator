import React, {useEffect, useState} from "react";
import  MapWrapper from "./components/MapWrapper";
import LeftDrawer from "./components/Drawer/LeftDrawer.js";


const Main = () => {

    const enums = {
        type: [
            "grass",
            "water",
            "wall"
        ],
        elevation: [
            "-1",
            "0",
            "+1"
        ]
    }

    const defaultTile = ((id) => {
        let tileObj = {}
        tileObj['id'] = id
        tileObj['type'] = 'grass'
        tileObj['elevation'] = 0;
        // tileObj['elevation'] = 0
        return tileObj;
    })

    const generateNewMap = ((width, height) => {
        let newMapObj = [];
        for (let x = 0; x < (width * height); x++) {
            newMapObj.push(defaultTile(x))
        }
        return newMapObj
    })

    const initializeMap = (() => {
        return generateNewMap(30, 30)
    })

    const copyToClipBoard = (() => {
        navigator.clipboard.writeText(JSON.stringify(mapObject))
    })


    const [mapObject, setMapObject] = useState(initializeMap());
    const [inspectedId, setInspectedId] = useState(0);
    const [tileObj, setTileObj] = useState(mapObject[inspectedId])
    useEffect(()=>{
        console.log('updating tile obj')
        setTileObj(mapObject[inspectedId])
    }, [mapObject, inspectedId])
    const [mapWidth, setMapWidth] = useState(20)
    const [mapHeight, setMapHeight] = useState(11)
    console.log(mapObject)


    return (
            <div>
                <LeftDrawer
                    updateTileObj={(da) => {setMapObject(da)}}
                    copyToClipBoard={copyToClipBoard}
                    tileObj={tileObj}
                    enums ={enums}
                    mapObj={mapObject}

                />
                <MapWrapper
                    mapObj={mapObject}
                    setInspectedId={setInspectedId}
                    inspectedId={inspectedId}

                />


            </div>
    );
}
export default Main;
