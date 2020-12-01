import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actionType from '../stores/action';


import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
    // state = {
    //     persons: []
    // }

    // personAddedHandler = () => {
    //     const newPerson = {
    //         id: Math.random(), // not really unique but good enough here!
    //         name: 'Max',
    //         age: Math.floor( Math.random() * 40 )
    //     }
    //     this.setState( ( prevState ) => {
    //         return { persons: prevState.persons.concat(newPerson)}
    //     } );
    // }

    personDeletedHandler = (personId) => {
        this.setState( ( prevState ) => {
            return { persons: prevState.persons.filter(person => person.id !== personId)}
        } );
    }

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.addPerson} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.deletePerson(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {

    return {

        persons:state.personReducer.persons

    };

}

const mapDispatchToProps = (dispatch) => {

    return {
        addPerson:()=>dispatch({type:actionType.ADD_PERSON}),
        deletePerson:(id)=>dispatch({type:actionType.DELETE_PERSON,id:id})
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Persons);