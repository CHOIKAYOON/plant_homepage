import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Basket from '../src/components/Basket/Basket';
import Primepage from '../src/components/Menu/Primepage';
import Fruitpage from '../src/components/Menu/Fruitpage';

ReactDOM.render(
  <Router >
    {/* 라우터 경로 선언 
        Basket : 장바구니 페이지
        Primepage : Prime과일 페이지
        Fruitpage : 일반 과일 페이지
    */}
    <Route exact path="/" component={App} />
    <Route path="/Basket" component={Basket} />
    <Route path="/Primepage" component={Primepage} />
    <Route path="/Fruitpage" component={Fruitpage} />
  </Router>,
  document.getElementById('root')
);

