import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FooterContainer from './containers/footer';
import JumbotronContainer from './containers/jumbotron';
import FaqsContainer from './containers/faqs';
import * as ROUTES from './constants/routes';

function App() {
  return (
    <>
      <Router>
        <Route exact path={ROUTES.HOME}>
          <JumbotronContainer />
          <FaqsContainer />
          <FooterContainer />
        </Route>
      </Router>
    </>
  );
}

export default App;
