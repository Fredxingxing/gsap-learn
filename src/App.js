import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '@/Pages/Home'
import Header from '@/Components/Header'
import Lessons from '@/Pages/Lessons'

import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route path="/">
                    <Home />
                </Route>
                <Route path="/lesson/:id">
                    <Lessons />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
