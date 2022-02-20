import React from "react";
import {FormLabel, TextField} from "@material-ui/core";

const TileDataTextBox = ({property, value}) => {
    return (
        <div>
            <TextField id="standard-basic" label={property} value={value}/>
        </div>
    );
};

export default TileDataTextBox;
