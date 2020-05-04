import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

const contact = (props) => {
  return (
    <div>
      <Card body inverse style={{ backgroundColor: '#333', borderColor: 'pink' }}>
        <CardTitle>Email:</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Button</Button>
      </Card>
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle>Phone:</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Button</Button>
      </Card>
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle>LinkedIn Profile:</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Button</Button>
      </Card>
      </div>
        );
    };
    
    export default contact;