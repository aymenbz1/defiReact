import React from 'react'
import{Form,Button} from'react-bootstrap';
import {Persons} from './ContactData';
const AddContact = ({handleChange,Add}) => {
    return (
        <div>
           <Form>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" name="email" onChange={handleChange} placeholder="Enter email" />
  </Form.Group>
  <Form.Group controlId="formGroupPassword">
    <Form.Label>name</Form.Label>
    <Form.Control type="name" name="name" onChange={handleChange} placeholder="name" />
    <Form.Label>phone</Form.Label>
    <Form.Control type="Phone"  name="phone"onChange={handleChange} placeholder="Phone" />
    <Button variant="primary" onClick={Add}>Add</Button>
      <Button variant="secondary">Cancel</Button>
  </Form.Group>
  {/* </Form.Group> */}
</Form> 
        </div>
    )
}

export default AddContact
