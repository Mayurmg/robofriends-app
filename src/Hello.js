import { Component } from 'react';
import './Hello.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

let Hello = (props) => {
  // render(){
    return (
      <span>
      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
      <h1 className="card-subtitle-2">Hey there</h1>
      <p>{props.greet}</p>
      <p>{props.dog}</p>
      <div className="mb-2">
        <Button variant="primary" size="lg">
          Large button
        </Button>{' '}
        <Button variant="secondary" size="lg">
          Large button
        </Button>
      </div>
      <div>
        <Button variant="primary" size="sm">
          Small button
        </Button>{' '}
        <Button variant="secondary" size="sm">
          Small button
        </Button>
      </div>
      <p className="fst-italic" >Hi</p>
      </span>
    );
  // }
}
export default Hello;