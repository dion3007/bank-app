import FETCH from '../lib/FETCH'

export const getCurrency = async () => {
    const response = await FETCH({
        method: 'GET',
    })
    
    return response.data
}

