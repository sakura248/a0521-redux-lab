import {ADD_PERSON} from '../actions/personUpdate'
import {DELETE_PERSON} from '../actions/personUpdate'

const initState = {
    personData: {}
    
}

export const personReducer = (state = initState, action) => {

    switch(action.type) {
        case ADD_PERSON:
            // const newPersonState = [...state.personData]

            const newPersonState = {
                id: Math.random(), // not really unique but good enough here!
                name: 'John',
                age: Math.floor( Math.random() * 40 )
            }

            return { ...state, personData: newPersonState}

            // setPeople( ( prevState ) => {
            //     return [
            //         ...prevState,
            //         newPerson
            //     ]
            // } );



        case DELETE_PERSON:
            return { ...state.filter(person => person.id !== action.payload.id) }
            // console.log(person)



        default:
            return state
    }

}
