// This is action 

export const ADD_PERSON = 'ADD_PERSON'
export const DELETE_PERSON = 'DELETE_PERSON'

export const personAdd = () => {
    return { 
        type: 'ADD_PERSON',
        // payload: {}
    }
}
export const personDelete = (id) => {
    return { 
        type: 'DELETE_PERSON',
        payload: {id}
    }
}