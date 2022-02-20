import React, {useEffect, useState} from "react";
import {InputLabel , MenuItem, FormControl, Select} from "@material-ui/core";


const TileDataDropdown = ({property, updateTileObj, data, enums, mapObj}) => {
    console.log('aaaadata')
    console.log(data)
    let [tempVal, setTempVal] = useState(data[property])
    useEffect(() => {
        console.log('id Changed')
        setTempVal(data[property])
    }, [data])
    let onChange = (newData) => {
        setTempVal(newData)
        let tiles = [...mapObj]
        console.log('mapobj')
        console.log(mapObj)
        console.log('mapObj length')
        console.log(mapObj.length)
        console.log('0 - mapObj.length')
        console.log(0 - mapObj.length)
        // for(let k = 0; k > (0 - mapObj.length); k--){
        //     console.log('k')
        //     console.log(k)
        //     console.log(0 - mapObj.length)
        //     console.log(0 - mapObj.length)
        //
        //     tile.push(mapObj[k]);
        // }
        console.log('mapobj2')
        console.log(mapObj)
        // data[property] = newData

        tiles[data.id][property] = newData
        console.log('tile')
        console.log(tiles)
        updateTileObj(tiles)
        console.log('newData')
        console.log(newData)
    }

    useEffect(() => {
        console.log('data.id')
        console.log(data.id)
        setTempVal(data[property])
    }, data.id)

    return (
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">{property}</InputLabel>
            <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={tempVal}
                onChange={(e) => {onChange(e.target.value); }}
                label={property}
            >
                {
                 enums[property].map((listItem) => {
                     return <MenuItem value={listItem}>{listItem}</MenuItem>
                 })
                }
            </Select>
        </FormControl>
    );
};

export default TileDataDropdown;
