import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';

export default (
    <Route path="/" component={App}>
      <IndexRoute component={App} />
      <Route path="/some/where" component={App} />
      {/* <Route path="/some/otherpage" component={SomeOtherPage} /> */}
    </Route>
  );