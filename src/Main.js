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
        return generateNewMap(10, 10)
    })

    const copyToClipBoard = (() => {
        navigator.clipboard.writeText(JSON.stringify(mapObject))
    })


    const [mapObject, setMapObject] = useState(initializeMap());
    const [inspectedId, setInspectedId] = useState(0);
    const [tileObj, setTileObj] = useState(mapObject[inspectedId])
    const [applyToggle, setApplyToggle] = useState(false)

    useEffect(()=> {
        console.log("applyToggle")
        console.log(applyToggle)
    }, [applyToggle])
    useEffect(()=>{
        console.log('updating tile obj')
        setTileObj(mapObject[inspectedId])
    }, [mapObject, inspectedId])
    const [mapWidth, setMapWidth] = useState(20)
    const [mapHeight, setMapHeight] = useState(11)


    return (
            <div>
                <LeftDrawer
                    updateTileObj={(da) => {setMapObject(da)}}
                    copyToClipBoard={copyToClipBoard}
                    tileObj={tileObj}
                    enums ={enums}
                    mapObj={mapObject}
                    setApplyToToggle={(v) => setApplyToggle(v)}
                    applyToggled = {applyToggle}

                />
                <MapWrapper
                    mapObj={mapObject}
                    setMapObj={(da) => setMapObject(da)}
                    setInspectedId={setInspectedId}
                    inspectedId={inspectedId}
                    applyToggled ={applyToggle}

                />


            </div>
    );
}
export default Main;
