import React from 'react';
import './App.css';
import Header from '../header/Header'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import '../common/styles/layout.css';
import '../common/styles/typography.css';
import Home from '../../pages/home/Home';
import About from '../../pages/about/About';
import {ApolloProvider} from '@apollo/client';
import client from "../common/apollo-client";

const App: React.FC = () => {
    return (<ApolloProvider client={client}>
            <Router>
                <div>
                    <Header/>
                </div>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" exact render={About}/>

                </Switch>
            </Router>
        </ApolloProvider>

    )
}

export default App;