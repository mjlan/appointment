import React, {Component} from 'react';
import { Router, Route, Redirect, IndexRoute } from 'react-router';
import { BrowserRouter } from 'react-router-dom'
import Index from '../components/index';
/*=================
   router.jsx 组件
  专门用来管理路由的
==================*/

const RouteConfig =(
  <BrowserRouter>
      <Route path='/' component={Index}/>
   </BrowserRouter>
);
export default RouteConfig
