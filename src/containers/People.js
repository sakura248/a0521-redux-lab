import React, { useState } from 'react';
import { connect } from 'react-redux'

import { personAdd, personDelete } from '../actions/personUpdate';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';


// ๐ด๐ด๐ด๐ดใใใใใใ๐ด๐ด๐ด
const People = ({ data, personAddFunc, personDeleteFunc}) => {
    // ๐ด๐ด๐ด๐ดใใใใใใ๐ด๐ด๐ด
    // const [people, setPeople] = useState([]) 

    const personAddedHandler = () => {
        personAddFunc()
    }

    const personDeletedHandler = (id) => {
        personDeleteFunc(id)
    }

    return (
        <div>
            <AddPerson personAdded={personAddedHandler} />
            {console.log("data: ", data)}
            {data.map((person) => (
                <Person 
                    key={person.id}
                    name={person.name} 
                    age={person.age} 
                    clicked={() => personDeletedHandler(person.id)}/>
            ))}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        data: state.personData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        personAddFunc: () => dispatch(personAdd()),
        personDeleteFunc: (id) => dispatch(personDelete(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(People)