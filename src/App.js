import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import {Persons} from './component/ContactData'

import { Button } from 'react-bootstrap';
import {Switch,Route,Link} from 'react-router-dom'
import ContactCard from './component/ContactCard'
import AddContact from './component/AddContact'
function App() {
const [ListContact, setListContact] = useState(Persons)

const [newContact, setNewContact] = useState({
  name:"",
  email:"",
  phone:"",
})

const handleChange=(e)=>{
  setNewContact({...newContact,[e.target.name]:e.target.value})
}

const Add=()=>{
  if(newContact.name && newContact.email && newContact.phone){
  setListContact([...ListContact,{...newContact,id:Math.random()}])
  }else { alert ("nono");
}
}

const Delete=(x)=>{
  setListContact(ListContact.filter(el=>el.id !==x))
}

  return (
    <div className="App">
      <Link to='/ContactList'>
    <Button variant="primary">Contact List</Button>
    </Link>
    <Link to='/AddContact'>
    <Button variant="secondary">Add Contact</Button>
    </Link>
    <Switch>
    <Route path='/ContactList' render={()=><div>{ListContact.map((el,i)=>(<ContactCard person={el} key={i} Delete={Delete}/>))}</div>}/>
    <Route path='/AddContact'  render={()=><AddContact handleChange={handleChange} Add={Add}/>}/>
    </Switch>
    </div>
  );
}

export default App;
