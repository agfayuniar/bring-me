import React, { useState, useEffect } from "react"
import { Box } from "@mui/material"
import { Fade } from "@mui/material"
import { Grid } from "@mui/material"
import { SearchAuto } from "../../components/search-auto"
import { MapsContainer } from "../../components/maps/container"
import { History } from "../../components/history"

import "./styles.css"

export const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        setIsOpen(true)
    }, [])

    return (
        <div className="full-width full-height flex">
            <Grid className="full-width">
                <Grid xs={12} sm={12} md={12} lg={12} xl={12} className="flex-middle glassy-box">
                    <Fade in={isOpen} timeout={{ enter: 1500 }}>
                        <Box className="search-box" mb={2}>
                            <div className="full-width flex-middle">
                                <div className="text-middle">
                                    <h1>BRING ME</h1>
                                    <label><i>escort you to the point in the blink of an eye!</i></label>
                                </div>
                            </div>
                            <SearchAuto />
                        </Box>
                    </Fade>
                </Grid>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container columns={12}>
                        <Grid xs={12} sm={12} md={4} lg={4} xl={4} p={1} className="body-left-container">
                            <History />
                        </Grid>
                        <Grid xs={12} sm={12} md={8} lg={8} xl={8} p={1} className="body-right-container">
                            <MapsContainer />
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </div >
    )
}