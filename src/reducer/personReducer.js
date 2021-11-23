import * as actionType from '../actions/personUpdate'
import { v4 as uuidv4 } from 'uuid'


const initState = {
    people: []
    
}

export const personReducer = (state = initState, {type, payload}) => {

    switch(type) {
        case actionType.addPerson:
            // const newPersonState = [...state.personData]
            const newPerson = {
                id: uuidv4(), // not really unique but good enough here!
                name: 'John',
                age: Math.floor( Math.random() * 40 )
            }
            return { 
                ...state, 
                people: [...state.people, newPerson]
            }

        case actionType.deletePerson:
            return {
                ...state, 
                people: state.filter(person => person.id !== payload) 
            }

        default:
            return state
    }

}
