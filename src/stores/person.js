import * as actionType from '../stores/action';

const initialState = {
    persons:[]
};

const person = (state = initialState,action) => {

    if(action.type == actionType.ADD_PERSON){

            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: 'Max',
                age: Math.floor( Math.random() * 40 )
            }
    
            return{
                ...state,
                persons:state.persons.concat(newPerson)
            }
       

    }

    if(action.type == actionType.DELETE_PERSON){

        const newPersons = state.persons.filter(person => person.id !== action.id);

        return{
            ...state,
            persons:newPersons
        }

    }


    return state;


}

export default person;