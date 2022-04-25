import React, { useState } from "react"
import { Box } from "@mui/material"
import { ArrowRight, ArrowDropDown } from '@mui/icons-material'
import { useSelector } from 'react-redux'


export const History = () => {
    const [expand, setExpand] = useState(true)
    const [reloaded, setReloaded] = useState(false)

    const histories = useSelector((state) => state.search.inputValue)

    return (
        <Box className="full-width history-container">
            <div className="title" onClick={() => { setExpand(!expand); setReloaded(true) }}>
                <span>History</span> {expand ? <ArrowDropDown className="expandIcon" /> : <ArrowRight className="expandIcon" />}
            </div>
            <div className={`${reloaded ? expand ? "history-body-in" : "history-body-out" : "history-body"}`}>
                {histories.map((data, index) => {
                    return <p id={index}>{data}</p>
                })}
            </div>
        </Box>
    )
}