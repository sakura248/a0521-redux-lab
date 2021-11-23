// This is action 

export const addPerson = 'ADD_PERSON'
export const deletePerson = 'DELETE_PERSON'

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