import React from "react";
import Button from 'react-bootstrap/Button';
import { Card ,ListGroup,ListGroupItem  } from 'react-bootstrap';


function DetailCard(props){
return <div>

<h3>{props.myData.length > 0 ? "data available":"not available"}</h3>

<div style={{display: 'flex',flexDirection: 'row',width:'100%',height:'100%',  flexWrap:'wrap'}} >
{props.myData.map(obj => { 
  return (
    <Card border="solid" style={{display:'inline-block',margin:'6px',border:'solid'}}>
    {/* <Card.Img variant="top" src={obj.avatar} style={{height:'60%'}} /> */}
    <Card.Body border="primary">
      <Card.Title> Car Owner : {obj.name} </Card.Title>
      <Card.Text>
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
    <ListGroupItem> Person age:{obj.age}  </ListGroupItem>
    <ListGroupItem> Contact No:{obj.con_number} </ListGroupItem>
    <ListGroupItem> Car Model: {obj.model} </ListGroupItem>
    <ListGroupItem> Make Year: {obj.year} </ListGroupItem>

  </ListGroup>

  </Card>
   
  )
})}
</div>


</div>
}

export default DetailCard;