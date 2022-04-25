import axios from 'axios'

export const getPlaces = async () => {
    try {
        var config = {
            method: 'get',
            url: 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=amoeba&types=establishment&location=37.76999%2C-122.44696&radius=500&key=AIzaSyAqEqqjsFjKmRvrSB9P9Fma2MscpTscDvo',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json;charset=utf-8'
            },
            withCredentials: true,
            credentials: 'same-origin',
        }
        const data = await axios(config)
        return data
    } catch (error) {
        const { data } = await error.response ? await error.response : ""
        return { data }
    }
}