import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CustomApplication from './CustomApplication';
//import { ApolloClient, ApolloProvider } from 'react-apollo';
//import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
//import { mockNetworkInterfaceWithSchema } from 'apollo-test-utils';
//import { resolvers } from './schemas/resolver';
//import typeDefs from './schemas/schema';

//const schema = makeExecutableSchema({ typeDefs, resolvers});
//addMockFunctionsToSchema({ schema });
//const networkInterface = mockNetworkInterfaceWithSchema({ schema });
//const client = new ApolloClient({ networkInterface });

class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
            <div className="App">
                <CustomApplication />
            </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
