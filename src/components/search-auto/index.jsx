import React, { useState } from "react"
import { Autocomplete } from "@mui/material"
import { TextField } from "@mui/material"
import { addSearchResult, setCountry } from "../../reducers/searchSlice"
import { useDispatch } from 'react-redux'


export const SearchAuto = () => {
    const options = countries
    const dispatch = useDispatch()

    return (
        <Autocomplete
            sx={{ maxWidth: 500 }}
            freeSolo
            disableClearable
            includeInputInList
            onInputChange={(e) => { dispatch(addSearchResult(e.target.textContent)); dispatch(setCountry(e.target.textContent)) }}
            options={options.map((option) => option.title)}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Where do you want to go?"
                    InputProps={{
                        ...params.InputProps,
                        type: 'search',
                    }}
                />
            )}
        />

    )
}

const countries = [
    { title: 'Indonesia', lat: 0, lon: 0 },
    { title: 'Kamboja', lat: 0, lon: 0 },
    { title: 'Laos', lat: 0, lon: 0 },
    { title: 'Malaysia', lat: 0, lon: 0 },
    { title: 'Myanmar', lat: 0, lon: 0 },
    { title: "Filipina", lat: 0, lon: 0 },
    { title: 'Singapura', lat: 0, lon: 0 },
    { title: 'Thailand', lat: 0, lon: 0 },
    { title: 'Vietnam', lat: 0, lon: 0 },
    { title: 'Brunei Darussalam', lat: 0, lon: 0 },
]