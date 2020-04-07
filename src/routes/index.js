import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Dashboard from '~/pages/Dashboard';
import Login from '~/pages/Login';
import Users from '~/pages/Users';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Dashboard} isPrivate />
            <Route path="/dashboard" exact component={Dashboard} isPrivate />
            <Route path="/login" component={Login} />
            <Route path="/users" exact component={Users} isPrivate />
        </Switch>
    );
}
