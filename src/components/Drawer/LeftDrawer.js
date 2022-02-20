import React, {useEffect, useState} from "react";
import {Button, Drawer} from "@material-ui/core";
import TileDataTextBox from "../TileDataTextBox/TileDataTextBox";
import TileDataDropdown from "../TileDataDropdown";

const LeftDrawer = ({tileObj, copyToClipBoard, updateTileObj, enums, mapObj}) => {
    console.log("tileObj")
    console.log(tileObj)
    const [newTileObj, setNewTileObj] = useState(tileObj)
    useEffect(() => {
        console.log('useffect')
        // updateTileObj(newTileObj)

    }, tileObj)
    let keys = Object.keys(newTileObj)
    console.log(keys)



    // let testObj = {}
    // testObj['id'] = 2
    // testObj['type'] = 'wall'
    // testObj['elevation'] = 0;
    // updateTileObj(testObj)
    return (
        <Drawer
            className="drawer"
            variant="permanent"
            classes={{
                paper: "drawerPaper"
            }}
            anchor="left"
        >
            <div>
                <h1>Properties</h1>
                <div className={'propertyContainer'}>
                    {
                        keys.map((property) => {

                            if (property === "id"){
                                return <h2>Tile ID: {tileObj[property]}</h2>
                            }
                            else {
                                return <><TileDataDropdown
                                    property={property}
                                    updateTileObj={(data) => {updateTileObj(data)}}
                                    data = {tileObj}
                                    enums = {enums}
                                    mapObj={mapObj}
                                />
                                <br/>
                                </>

                            }
                        })
                    }
                    {/*<Button onClick={()=>{ updateTileObj(tileObj)}}>Apply Change(s)</Button>*/}
                </div>
            </div>
            <div>

            </div>

            <Button onClick={()=>{copyToClipBoard(newTileObj)}}>Copy Map Object To Clipboard</Button>
        </Drawer>
    );
};

export default LeftDrawer;
