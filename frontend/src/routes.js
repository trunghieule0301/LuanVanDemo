import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from './pages/NotFound';

import AllBooks from './pages/Manage/Book/AllBooks'
import Category from './pages/Manage/Book/Category'
import Lent from './pages/Manage/BookLending/Lent'
import Pending from './pages/Manage/BookLending/Pending'
import User from './pages/Manage/User/User'
//import Home from './pages/Manage/Home/Home'
import DataTable from './pages/temp'
//import CustomizedSnackbars from './pages/temp2'

const BaseRouter = () => (
  <Switch>
    <Route exact path='/admin' component={DataTable} />
    <Route path='/admin/all-book' component={AllBooks} />
    <Route exact path='/admin/book-category' component={Category} />
    <Route path='/admin/book-lending-lent' component={Lent} />
    <Route path='/admin/book-lending-pending' component={Pending} />
    <Route path='/admin/users' component={User} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default BaseRouter;
