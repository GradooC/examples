import React from 'react';
import moment from 'moment';
import addDays from 'date-fns/addDays';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkbox from './components/checkbox/Checkbox';
import SocialList from './components/socialList/SocialList';
import Button from './components/button/Button';
import { TodoPage } from './features/todo-page';
import { SpacePage } from './features/space-page';
import { CardPage } from './features/card-page';

import './App.css';

function App() {
    console.log('App -> moment', moment().add('1', 'days').toDate());
    console.log('App -> fns', addDays(new Date(), 1));
    return (
        <Router>
            <Switch>
                <Route path="/cards">
                    <CardPage />
                </Route>
                <Route path="/list">
                    <TodoPage />
                </Route>
                <Route path="/space">
                    <SpacePage />
                </Route>
                <Route path="/">
                    <Checkbox />
                    <SocialList />
                    <Button />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
