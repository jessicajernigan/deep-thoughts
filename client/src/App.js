import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks'; // a special type of React component that we'll use to provide data to all of the other components
import ApolloClient from 'apollo-boost'; // get that data when we're ready to use it
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';

const client = new ApolloClient({
  uri: '/graphql' // URI stands for "Uniform Resource Identifier."
});


function App() {
  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
          <Home />
        </div>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
