import React from 'react';
import { Segment, Card } from 'semantic-ui-react';
// const getLives = (twitzlariList, dispatch) => {
//   dispatch(getZuzenekoak(twitzlariList));
// };
const Tresnak = (props) => {
  return (
    <div>
      <h1>Zuzenekoetarako tresnak</h1>
      <Segment basic>
        <Card.Group itemsPerRow={6} doubling></Card.Group>
      </Segment>
    </div>
  );
};
export default Tresnak;
