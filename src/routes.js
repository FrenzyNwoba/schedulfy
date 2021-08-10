import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateSchedule from './components/CreateSchedule';

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/CreateSchedule' component={CreateSchedule} />
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;
