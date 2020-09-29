import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '@/Pages/Home'
import Header from '@/Components/Header'
import Lessons from '@/Pages/Lessons'

import './App.css';

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                {/*<Route path="/lesson/:id">*/}
                {/*    <Lessons />*/}
                {/*</Route>*/}
            </Switch>
        </Router>
    );
}

export default App;
