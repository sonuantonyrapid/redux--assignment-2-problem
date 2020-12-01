import React,{useState} from 'react';

import './AddPerson.css';

const state = {
    name:'',
    age:'',
};

const [personState,setPersonState] = useState(state);



const addPerson = (props) => (
    <div className="AddPerson">
        <input type="text" placeholder="Name" value={personState.name}/>
        <input type="number" placeholder="Age" value={personState.age}/>
        <button onClick={props.personAdded}>Add Person</button>
    </div>
);

export default addPerson;