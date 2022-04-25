import React from "react"
import { Box } from "@mui/material"
import MapWrapper from "./index"
import { LocationPin } from "../location-pin"

export const MapsContainer = () => {

    return (
        <Box className="full-width maps-container">
            <div className="title">
                Maps
            </div>
            <div className="maps-box">
                <MapWrapper />
            </div>
        </Box>
    )
}