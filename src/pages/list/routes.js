import React from 'react';
import { Route } from 'react-router';
import ListPage from './list';
import ItemDetails from './item-details';

export default (
    <Route>
        <Route component={ ListPage } path={ ListPage.path } />
        <Route component={ ItemDetails } path={ ListPage.path + '/:id' } />
    </Route>
);
