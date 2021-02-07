import React from'react'
import {Card,Button} from 'react-bootstrap'

const ContactCard=({person,Delete})=>{
    return(
        <div>
<Card border="primary" style={{ width: '18rem' }}>
    <Card.Header>{person.name}</Card.Header>
    <Card.Body>
      <Card.Title>{person.email}</Card.Title>

      <Button variant="primary">Edit</Button>
      <Button variant="secondary" onClick={()=>Delete()}>Delete</Button>
    </Card.Body>
  </Card>
  </div>
    )};

export default ContactCard;