import React, {useEffect, useState} from "react";
import {InputLabel , MenuItem, FormControl, Select} from "@material-ui/core";


const TileDataDropdown = ({property, updateTileObj, data, enums, mapObj}) => {

    let [tempVal, setTempVal] = useState(data[property])

    useEffect(() => {
        setTempVal(data[property])
    }, [data])

    let onChange = (newData) => {
        setTempVal(newData)
        let tiles = [...mapObj]
        tiles[data.id][property] = newData
        updateTileObj(tiles)
    }

    useEffect(() => {
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
