import React from 'react';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

const firstName = "Lazhar"; // Replace with your name or leave empty

const App = () => {
  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '50px' }}>
      <Card style={{ width: '18rem', margin: 'auto' }}>
        <Card.Body>
          <Card.Title>Product Card</Card.Title>
          <Image />
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
      <div style={{ marginTop: '20px' }}>
        {firstName ? (
          <>
            <p>Hello, {firstName}!</p>
            <img src={`https://via.placeholder.com/150?text=${firstName}`} alt="Greeting" style={{ width: '150px', height: '150px' }} />
          </>
        ) : (
          <p>Hello, there!</p>
        )}
      </div>
    </div>
  );
};

export default App;
