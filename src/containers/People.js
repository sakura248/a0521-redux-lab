import React from 'react';
import { connect } from 'react-redux'

import * as actionType from '../actions/personUpdate';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';


// 🔴🔴🔴🔴ここをかえる🔴🔴🔴
const People = ({ peopleProps, personAddFunc, personDeleteFunc}) => {


    const personAddedHandler = () => {
        personAddFunc()
    }

    // ❓ なんでつかわない？　
    const personDeletedHandler = (id) => {
        personDeleteFunc(id)
    }

    return (
        <div>
            <AddPerson personAdded={personAddFunc} />
            {console.log("data: ", peopleProps)}
            { peopleProps && peopleProps.map((person) => (
                <Person 
                    key={person.id}
                    name={person.name} 
                    age={person.age} 
                    clicked={() => personDeleteFunc(person.id)}/>
            ))}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        peopleProps: state.people,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        personAddFunc: () => dispatch({type: actionType.addPerson}),
        // ❓書き方が違う
        personDeleteFunc: (id) => dispatch({type: actionType.deletePerson, payload: id}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(People)