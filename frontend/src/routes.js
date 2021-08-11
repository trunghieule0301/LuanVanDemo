import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from './pages/ErrorStatus/NotFound';
import AllBooks from './pages/Manage/Book/AllBooks'
import Category from './pages/Manage/Book/Category'
import Lent from './pages/Manage/BookLending/Lent'
import Pending from './pages/Manage/BookLending/Pending'
import User from './pages/Manage/User/User'
//import Home from './pages/Manage/Home/Home'
import BookLocation from "./pages/Manage/Book/BookLocation";
//import example from './pages/temp3'
import Avatar from './pages/temp'

const BaseRouter = () => (
  <Switch>
    <Route exact path='/admin' component={Avatar} />
    <Route path='/admin/all-book' component={AllBooks} />
    <Route exact path='/admin/book-category' component={Category} />
    <Route exact path='/admin/book-location' component={BookLocation} />
    <Route path='/admin/book-lending-lent' component={Lent} />
    <Route path='/admin/book-lending-pending' component={Pending} />
    <Route path='/admin/users' component={User} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default BaseRouter;
