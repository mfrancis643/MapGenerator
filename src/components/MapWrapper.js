import React from "react";
import Hexagon from "./Hexagon";
import HeadBanner from "../HeadBanner";
import styles from '../styles.css'

const MapWrapper = ({mapObj, setInspectedId, inspectedId}) => {

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
                                    parOnClick={setInspectedId}
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