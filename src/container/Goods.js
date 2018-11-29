import React from 'react';

import { ListGroup, ListGroupItem, Panel } from 'react-bootstrap';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';

const CardGood = ({ flex }) => (
  <Card
    style={{
      padding: 15,
      flex: flex,
      height: 500,
      width: 240,
      border: '1px solid black'
    }}
  >
    <CardImg
      top
      src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
      alt="Card image cap"
    />
    <CardBody>
      <CardTitle>Card title</CardTitle>
      <CardSubtitle>Card subtitle</CardSubtitle>
      <CardText>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </CardText>
      <Button>Button</Button>
    </CardBody>
  </Card>
);

class Goods extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          height: '100%'
        }}
      >
        <div
          style={{
            width: '80%',
            display: 'flex',
            flexDirection: 'row',
            border: '1px solid black',
            height: '100%'
          }}
        >
          <CardGood flex={1} />
          <CardGood flex={1} />
          <CardGood flex={1} />
        </div>
        <div
          width="240px"
          height="100vh"
          style={{ backgroundColor: 'green !important' }}
        />
      </div>
    );
  }
}

export default Goods;
