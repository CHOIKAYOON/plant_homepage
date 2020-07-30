# plant_homepage
-------

React를 이용해서 구현했습니다. 
css는 직접 구현했으며, sass 라이브러리를 이용했습니다. 컴포넌트는 class 기반으로 개발을 진행했습니다. 
라우터를 사용해서 페이지 3개를 구현해서 나눴으며, 각 페이지에 필요한 기능을 적용했습니다. 
![식물](https://user-images.githubusercontent.com/31337244/88902585-60887a00-d28d-11ea-9d61-0fdd5ee5ea04.JPG)


## 컴포넌트 구조
* Components
    * Basket(장바구니)
      * Basket.js
      * Basket.scss
    * Menu(식물 메뉴)
      * lantpage.js(일반식물)
      * Menu.js (전체)
      * Primepage.js(
    * Nav
      * Nav.js
      * Nav.scss
* lib 
    * api : 외부 함수 호출 API 함수 (axios)
* App
  * App.scss
* index

------

## * App.js

```
import React, { Component } from 'react';
import style from './App.scss';
import className from 'classnames';
import * as api from '../src/lib/api';
import Nav from '../src/components/Nav/Nav';
import Menu from './components/Menu/Menu'

const ex = className.bind(style);

class App extends Component {
  // 실제 사용할 Data를 state에 선언
  state = {
    // list 라는 배열에 객체의 값 입력 (보내준 요청 파라미터 정보)
    list: [
      {
        id: 1,
        name: '나무',
        imges: 'data:image/png;base64,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',
        stock: 0,
        demand: 1,
        price: 20000,
        isPrime: true,
      },
      {
        id: 2,
        name: '나무',
        imges: 'data:image/png;base64,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',
        stock: 5,
        demand: 4,
        price: 20000,
        isPrime: false,
      },
      {
        id: 3,
        name: '나무',
        imges: 'data:image/png;base64,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',
        stock: 8,
        demand: 4,
        price: 20000,
        isPrime: false,
      },
      {
        id: 4,
        name: '나무',
        imges: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABF1BMVEX////eklICj10Jpm1Jy1zZgzvhnGI/yVRe0W4ApG4AjF1KzVyrYy5Cx13ek1MAjFjah0EAo2cAh08AoGHdj003yE7djUgDkl/XeiUApW8GnWcJqG73/PrahkAAhUsFmWRWqobm8+4wumQotWY3sYAmqFz78+3Yfi+63M2o0b/M5NpOuIyZ07obrmllsZA4oXeDv6WEy61uw5/d8ek9vlwhl2lw1H7o+Ortxaj46uHOezjPhEjy2MXqu5iIwqmm2MOdy7ZbupK+5NR0u517x6ZFons+s4QvsVyWyLIuvlBXz2h21oOF2pCR3Zuf4aeu5bW96sMAk1JuzITjo3LrwJ/nsIfw0LhswVqSs1e3o1TUllP03s/CeD9zAwhkAAALZElEQVR4nO2de0PayBrGkQAKWRMJyKVElNYVxWtlXaGVarW1l93ubg/as7v6/T/HSSAhmZl3QmIS5nJ8/mylzo/3Ou9M0kxmodo91s/2FvsrF6u9djabbZ+wXkZ66tmA2awhrRU7Rnaqdo/1UlLSme4QZnWT9VpS0dEMMKt/ZL2YNLRnZD0Z71gvJ3l19KxfhnyhuF9GCLN12ULxsqK8QAj1G9ZLSladsqIodZn99L1NqKB+esZ6UUnqumIDKpuoET+zXlaCaipToUY0OqzXlZgOyg4hlmyOWC8sKZkuIJFs+qyXlpBezwhbmBG3WC8tGZmKp5aURjwo+whljES/CeVMp5cVhBCtiboME43bcpARs+I34H3UhERjs8t6gbH1ATOhfAWjqeDCco3obtrDnZRwU9FHi6/LOKBsbrpNmBB3U8EniybmpMXWYasp1V7/GiUsvlRV9SVW9K9YLzKW0DBsvlJzuZz6qSRRIL5HCIurOVurCGH2mPUiYwmthg6hihIKXRHNMkiI1XyR9xedCkiIJVORW1M8lf7fEErUt13DcYgVRJFP2nZDEYp8RhPOhkITholDoWc14QivWC8zhvrSVwtTfsJQXZvQo/1bkFCizjtzCu2eVJl2TwfzCQU/nUGHiSCh0G0pnmpgQqETTSazP5ewznqJMYUEIkQoeBhiXQ1EGLnem/3e1buTraMrXorM9jwbRlio2ft8Uzcs6ZaMM04Q/RNTgDC8k/beHdtoPutzsifxuylAGG6mb16fthG6yZfDS6vgO+UGCMNc37ver5Sx26mhP7sIXQYRGlfzPt4/rVTK+JHc1IZb6S8+lMxWAOG8PNOzzGd/kmtCX64hCOcMMK63Z0EMEXIz3+kEEAYN9PuO/SbaJAk5amhnRsQJg0xoniJNex0g5Gc2YFIJ6VHYU5CevUUCctWyu80pRhjwWMlr/AoHRMhJTzORc4z4AiWk1jNzHwcsAomGl4I/kbMRziKE1DjqNPErKmCx4GtTMrn79aLkJ6SWsz5xBQdMpbwNku0tRhYlpFSKHgDYglIpZ7dU+uXWJkJIq2aQBflPNLYuK1k/Ic1HOxAgGIb8PcK4pSOEFB8lrzLSwpC/c1XTb0NaHn0P+qgIYWirZ8wIadvzS/KupqUmFIZcXp/eMxxCWgx1IMDi4atyieDjZ+uE6OaLY0PK938LALZW7ct+BCJHbTeiqQ2XKS0z5KMWoP2d/Iwj8nordWVKCP+lCZX66XeS+wUj5Kxl8xRISF6YVlq5HEzIYyadKIiQTDPNQxeQ8FJexmyEggjxBzP8gIQJrxa77vAKICRMGADIbZ4JJMSjMBCQk3k+IDohnkiLh6oLSBbDwBEdW9EJL8sRAFMyYa8Xf7ZFJ0Sf4fMBfgI6tlSicK9tGEbbODs62Y1RiqiE6PWwYMB0JsG7bff70y3Q+s3e0+xJJUQPw18FWjCdWriFnt1ZmPrNbnRnoRJuw4BkDKY2CL4tv8B3obrR3tqLCEkjRI5RfYDQzjelvf2+0lIUANK4ifSN0gj9Z4we4CtoPJPWHHhyP62lFImBid4+jhD4NMJ9EBAYdKdXCr2Og2Q06qEZKYReuUcAFzqd8Rdk8hcbZyF33BTC2e234ksPsAkBpndkiFy6B8LD2ArlPRTC2dmUHxA6E03xnT39oBcjTH01zG+nEDozRB/gIQiYZsONN8aQGT/ONyOFsBkKsJ3uW5ewJ5ZbQDTq+txohAmnk/y5gCkf25PDaGgR86oxTDhJNMVfPEAgi+p62pMZYEwEeeqcERhMaCdqDzB3CGay1Hf118AsE1xJ4L8CE34oIxYE0pi+gIsl4MA9MiJMuO+3IHmBTW+HK0VxBb0cIbKjwoRNxQPcJOf3xwuajZ6C514RqxZIaDbpgHrodim+rkFC6K5Sm74mkLDzZQZYLzHjowSiAp+wU8MGJPx12eFbraN4xs1iZ/f4+55sFVvgETt1DwcRgoDW9vpj1O11bB2QhIerqrpK5gb6PpwkNF1AdXVGZ1lva4/BSJR4pZWiqKRvOaFIWR9BaK74Ae0b+IZ+9JnVwRJeL5rObnWVJKQdY+OEHuAXw2jrx0fvdlleOMTd1G2VVQCRcgiNEZpfHcDlX5OYN8cWcUbrzm3JoxPaUBMl9AEujiJQeNGf9VoAImxEhNDMOR9f/m2RFEEick0QImhEP2GHP0DgNkhxlYoIGtFHeK66gL8vmCJIwBaKigiWfY/wfJlHQPBKDxUROl+YEc4A178tniJIwDsCqYjQAx8u4bnbqfEGCN8ddC71EEdhwEHmlDDHrQUz8A3eFgURyDUOoZtk1v9ggDBPwESKhghcH3QIcxwDWt1pBETCTRHC9T9ZrH++gC0GDZF00xUBAK0GHETMAYjkrZAVEQApMykP0XfJjujcPML1v1gsPaz2AUTwHiExsFkRAzBjQtlGqZCIRCCuiAFIQdz8TiASgbgiCCCMWCxVVAyR6L6dro1/QEvEE4L2g1sEIv5QROAtaN50SiBm/YiVEpRqhCIknx2ok4h4qhGLMNPZJq8vlH5GEPGnIAUjtNsb4r8fQRHxxyKEI8x0/NE4PcFAEPFkKh7h5MUHvlSDIKq5Sgnr20QkzGR6t66vZrO4Fb9j5UJMQovxtIL8x3EeYu47Wi5EJbR6nMvtStl7s4OHuHyO/Jy4hJb6B9uG4d6VLn2axSKCKDShpf7ekeG8rMqH6PdT0Qlt9XdPju33jZU+uSeDOV+ykYFwok5v9+TkP+sO4lcPURrCqb45iMseomSEHuKKiygbYeabe8a74vyBdISZ3zFE+Qg9xOlJvYSEGKKMhJnfXET7tF5KQgRRTsLZ1TwLUVJCD/GbrISz22vO4bZ8hB5iTlZCDFFGQu+SnrSEFqIqOaF3UU9awsz5DFFWQg9RWsLMufSELqLEhNL2pZ6eCcXXM6H4eiYUX8+E4uuZUHw9E4qvZ0Lx9Uwovp4JxdDwx/24oBXGo4sd4u8kINy509Zq1erS0lK1WlsbP2B/LT7hoFZb8qmKM4KEOxeDu/v7wQ/S5Nxpp4DwTRnv/QsnCYd3WqPRnahRHSx6xRE1nHgnwVj94f0ITnhRaHTznrr5CwbrDq0dENBSbTwzI0o4yDfymBo8m3FMAbTMWHPX7SMcjqq1Gg5oId4xRAjWHRGDfjNqU1e1CVV1PTMcFGrWF6KtAYg/5vwiVhoGAdqM1dHDTubrspr779//FGq1qcG1DQBxyJoFFt1HPV+taf/+q1mpx/+jJGF+gzULqIe1eYCwtCpJ2L1nTQNpvglpiIKE4vCJJrQF+GmXv/bm/qkmtAT4ab7AGgjXTgwTLmlAVeyOWCNhimNCNxTfPL7xhyJf7VssEy5Nq+LjT5Z8jA1848VU8Uxoa+PNTxPl+UTEE6m91KiIjwQhT45aQEyoTdcakfAtSZhv8JJuRjVorVGNCBDmuzUuPHWA+ahD+PYpRiS7mwL72caIyKNPs6HFWLW68toattvoNsaDC4a7jQdyMqNNksajFh1x+nFNm4zpEEhLNXA6ma6GF6PCGlAntLePj2+fCujnRHtye1S1MV6Q0+5cjMZaba1GK4NaTD73n8EhbczGOPWNx85g7Mx8FyCNYLSyz1qqjA/3Narpoqw8AiOBaGXY1Hx1OIYC7wmys1HoWCXN2E1rjzxIwnxLbroNXVDAMUAqc9X7mFsIT9OSGbqiLGrSMZ4zL0yPEJx0JD90vE8OUIvc2EGTDi1hwEFygE4T+hjhA+DkONndVZxhGiSr7Yn08+kbMf42HlXUtkdLOxKTNmFkQem0m+Qx1WhBXRpdaU9Vk2mlYwly0+QAmTspJRCTa08vkiwVTyRMt14kWgyfSAilmuQ6txF7QmCHkWQyHRTYS9tYw5UPdZT6P7yrWqFz5Wz+AAAAAElFTkSuQmCC',
        stock: 1,
        demand: 6,
        price: 20000,
        isPrime: true,
      },
      {
        id: 5,
        name: '나무',
        imges: 'data:image/png;base64,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',
        stock: 7,
        demand: 3,
        price: 20000,
        isPrime: true,
      }
      , {
        id: 6,
        name: '나무',
        imges: 'data:image/png;base64,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',
        stock: 5,
        demand: 8,
        price: 20000,
        isPrime: true,
      }
    ],
    // 장바구니 state 값
    basketNumber: 0
  }

//  랜더링 후 바로 외부 API 호출 하도록 구현
   componentDidMount() {
    // api.getApi()
    // .then(res => this.setState({
    //   state : res.data
    // }))
  }

  // '담기' 이벤트 함수 구현 ID 값을 가져와서 객체 id값과 일치하면 그 값을 업데이트 해주도록 구현
  handlePlusClick = (id) => {
    const { basketNumber, list } = this.state
    this.setState({
      //담기 함수 클릭시 장바구니 값도 업데이트
      basketNumber: basketNumber + 1,
      list: list.map(
        info => info.id === id ? ({ ...info, demand: info.demand + 1, stock: info.stock - 1 }) : info
      )
    })
  }

  // '뺴기' 이벤트 함수 구현 ID 값을 가져와서 객체 id값과 일치하면 그 값을 업데이트 해주도록 구현
  handleMinusClick = (id) => {
    const { basketNumber, list } = this.state
    this.setState({
      //담기 함수 클릭시 장바구니 값도 업데이트
      basketNumber: this.state.basketNumber - 1,
      list: list.map(
        info => info.id === id ? ({ ...info, demand: info.demand - 1, stock: info.stock + 1 }) : info
      )
    })
  }

  //"잔량"에 값이 없을 시 이벤트 방지 함수 구현
  handelstopClick = (e) => {
    return false;
  }

  render() {
    const { list } = this.state
    return (
      <div className={ex('body')}>
        {/* Nav 컴포넌트에 장바구니  basketNumber/list state 값 전달 */}
        <Nav basketNumber={this.state.basketNumber} list= {list} />
        <div className={ex('fruit_content')}>
          <div className={ex('fruit_content_list')}>
            {/* Menu 컴포넌트  list state 값 전달*/}
            <Menu list ={list}/>
            {/* list 배열 map 통해 값 보이도록 구현 */}
            {this.state.list.map((item, idx) => (
              <div className={ex('fruit_list_item')} key={idx}>
                <div className={ex('fruit_item')}>
                {/* isPrime 값이 참일 경우 보이도록 선언 */}
                  {item.isPrime && <h3>Prime</h3>}
                  <img src={item.imges} />
                  <p>{item.name}</p>
                  <p>{item.price}원</p>
                  <p className={ex('fruit_item_p')}> 잔량 <span>{item.stock} </span></p>
                  {/* 수량 버튼 삼항 연산자 및 이벤트 함수 */}
                  {item.demand === 0 ? (
                    <div className={ex('fruit_item_button')}>
                      <button className={ex('fruit_item_btn')} onClick={() => this.handlePlusClick(item.id)}>담기</button>
                    </div>
                  ) : (
                      <React.Fragment>
                        <p className={ex('fruit_item_p')}>수량 <span>{item.demand}</span></p>
                        {/* 잔량 버튼 삼항 연산자 및 이벤트 함수  */}
                        {item.stock === 0 ? (
                          <div className={ex('fruit_item_button')}>
                            <button className={ex('fruit_item_btn')} onClick={() => this.handelstopClick(item.id)}>담기</button>
                            <button className={ex('fruit_item_btn_02')} onClick={() => this.handleMinusClick(item.id)}>빼기</button>
                          </div>
                        ) : (
                            <div className={ex('fruit_item_button')}>
                              <button className={ex('fruit_item_btn')} onClick={() => this.handlePlusClick(item.id)}>담기</button>
                              <button className={ex('fruit_item_btn_02')} onClick={() => this.handleMinusClick(item.id)}>빼기</button>
                            </div>
                          )}
                      </React.Fragment>
                    )}
                </div>
              </div>
            )
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
```
-------

## * index.js
```
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
```
-------

## * Basket.js

```
import React, { Component } from 'react';
import style from '../Basket/Basket.scss';
import className from 'classnames';
import Nav from '../Nav/Nav';
import Menu from '../Menu/Menu';

const ex = className.bind(style);

class Basket extends Component {
  // 실제 사용할 Data를 state에 선언.
  state = {
    // list 라는 배열에 객체의 값 입력 (보내준 요청 파라미터 정보).
    list: [
      {
        id: 1,
        name: '나무',
        imges: 'data:image/png;base64,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',
        stock: 0,
        demand: 1,
        price: '50,000',
        isPrime: true,
      },
      {
        id: 2,
        name: '나무',
        imges: 'data:image/png;base64,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',
        stock: 5,
        demand: 4,
        price: '7000',
        isPrime: false,
      },
      {
        id: 3,
        name: '나무',
        imges: 'data:image/png;base64,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',
        stock: 8,
        demand: 4,
        price: '20,000',
        isPrime: false,
      },
      {
        id: 4,
        name: '나무',
        imges: 'data:image/png;base64,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',
        stock: 1,
        demand: 6,
        price: '50,000',
        isPrime: true,
      }
    ],
    basketNumber: 0,
    primeTotal: 0,
    fruitTotal: 0,
    toTal: 0
  }

  hendlepurChasePrime = () => {
    const { list, primeTotal } = this.state
    return (
      <React.Fragment>
        <p className={ex('fruit__purchase_prime')}>
          prime식물
          <span>
              {this.state.toTal}
          </span>
         
        </p>
      </React.Fragment>
    )
  }

  hendlepurChaseFruit = () => {
    return (
      <React.Fragment>
        <p className={ex('fruit__purchase_fruit')}>
          일반 식물
              <span>
            {this.state.toTal}
          </span>
        </p>
      </React.Fragment>
    )
  }
  hendlepurChaseTotal = () => {
    return (
      <React.Fragment>
        <p className={ex('fruit__purchase_total')}>
          총 상품금액
                <span>
            {this.state.toTal}
          </span>
        </p>
      </React.Fragment>
    )
  }

  // '취소' 이벤트 함수 구현 ID 값을 가져와서 객체 id값과 일치하면 그 값을 업데이트 해주도록 구현.
  handleMinusClick = (id) => {
    const { list } = this.state
    this.setState({
      list: list.map(
        info => info.id === id ? ({ ...info,  demand: info.demand - 1 }) : info 
      )
    })
  }

  // 장바구니 list 삭제 함수 구현 ID 값을 가져와서 객체 id값과 일치하면 그 값을 삭제해주도록 구현.
  handleRemoveClick = (id) => {
    const { list } = this.state
    this.setState({
      list: list.filter(
          info => info.id !== id 
      )
    })
  }

  // 동시에 이벤트를 진행하기 위해 함수 하나에 2개의 함수 구현.
  handleClickChageList =(item_id, item_demand) => {
    this.handleMinusClick(item_id, item_demand);
    if(item_demand === 1){
      this.handleRemoveClick(item_id, item_demand);
    }
  }

  // 결제하기 버튼 이벤트 함수 
  handlePayMent = () => {
    const { list } = this.state
    this.setState({
      list : []
    })
  }

  render() {
    const { list, primeTotal } = this.state
    return (
      <div className={ex('body')}>
        {/* Nav 컴포넌트에 장바구니  basketNumber/list state 값 전달 */}
        <Nav basketNumber={this.state.basketNumber} list={list} />
        <div className={ex('fruit_content')}>
          <div className={ex('fruit_content_list')}>
             {/* list 배열 map 통해 값 보이도록 구현 */}
            {this.state.list.map((item, idx) => (
              <div className={ex('fruit_list_item')} key={idx}>
                <div className={ex('fruit_item')}>
                  {/* isPrime 값이 참일 경우 보이도록 선언 */}
                  {item.isPrime && <h3>Prime</h3>}
                  <img src={item.imges} />
                  <p>{item.name}</p>
                  <p>{item.price}원</p>
                  {item.demand > 0 && (
                    <React.Fragment>
                      <p className={ex('fruit_item_p')}>수량 <span>{item.demand}</span></p>
                    </React.Fragment>
                  )}
                   <p className={ex('fruit_item_p_02')}>상품금액 <span>{item.price}원</span></p>
                  <div className={ex('fruit_item_button')}>
                    {/* 수량 값이 0일 경우 이벤트 클릭 함수 호출 */}
                    <button className={ex('fruit_item_btn_03')}
                      onClick ={
                        () => {this.handleClickChageList(item.id, item.demand)}
                        }>취소</button>
                  </div>
                </div>
              </div>
            )
            )}
          </div>

          <div className={ex('fruit_purchase_content')}>
            {/* 가격 정보 함수 컴포넌트로 구현 */}
            {this.hendlepurChasePrime()}
            {this.hendlepurChaseFruit()}
            {this.hendlepurChaseTotal()}
            <div className={ex('fruit__purchase_btn')}>
              <button className={ex('purchase_btn')} onClick={this.handlePayMent}>결제하기</button>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

export default Basket
```
-------

## * Nav.js
```
import React, {Component} from 'react';
import style  from '../Nav/Nav.scss';
import className from 'classnames';
import { Link } from 'react-router-dom';

const ex = className.bind(style);

class Nav extends Component{
    render(){
        const number =  this.props.basketNumber
        return(
            <div className={ex('nav_top')}>
            <h4>크몽이네 과일가게</h4>
                <div className={ex('nav_top_menu')}>    
                    <button className={ex('nav_btn')}>
                        <a href="/">상품목록</a>
                    </button>
                    <button className={ex('nav_btn_02')}>
                       <Link to ={`/Basket`} >장바구니</Link>
                    </button>
                     <p>{number}</p>
                </div>
        </div>
        )
    }

}

export default Nav

```
-------

## * Menu.js

```
import React, { Component } from 'react';
import style from '../../App.scss';
import className from 'classnames';
import { Link } from 'react-router-dom';
const ex = className.bind(style);

// 과일 페이지 보여주는 메뉴 컴포넌트.
class Menu extends Component {
    render() {
        return (
            // 버튼 클릭 시 해당 페이지 경로로 설정.
            <div className={ex('fruit_menu')}>
                <button className={ex('fruitList_btn')}>
                    <Link to='/' >전체</Link>
                </button>
                <button className={ex('fruitList_btn_02')}>
                    <Link to={`/Fruitpage`} >일반 과일</Link>
                </button>
                <button className={ex('fruitList_btn_03')}>
                    <Link to='/Primepage' ><span>Prime</span>과일</Link>
                </button>
            </div>
        )
    }
}

export default Menu
```
-------

## * Fruitpage.js

```
import React, { Component } from 'react';
import style from '../../App.scss';
import className from 'classnames';
import Nav from '../Nav/Nav';
import Menu from '../Menu/Menu';

const ex = className.bind(style);

class Fruitpage extends Component {
    // 실제 사용할 Data를 state에 선언
    state = {
        // list 라는 배열에 객체의 값 입력 (보내준 요청 파라미터 정보)
        list: [
            {
                id: 1,
                name: '귤',
                imges: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTI6CSFrN50oLgC3XHOqFIV9nfY-0qU12vB2g&usqp=CAU',
                stock: 0,
                demand: 1,
                price: 20000,
                isPrime: true,
            },
            {
                id: 2,
                name: '사과',
                imges: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbIRX40BEHDGSAORsk_cRxEAH0KqV-jwTxwA&usqp=CAU',
                stock: 5,
                demand: 4,
                price: 20000,
                isPrime: false,
            },
            {
                id: 3,
                name: '레몬',
                imges: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ9t3aevrXZ8KWoXJFJntLu6FwqTunjOICyrA&usqp=CAU',
                stock: 8,
                demand: 4,
                price: 20000,
                isPrime: false,
            },
            {
                id: 4,
                name: '수박',
                imges: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4ly4Du2jHqmxvK0e_uojZN0C84mkXSKSVQg&usqp=CAU',
                stock: 1,
                demand: 6,
                price: 20000,
                isPrime: true,
            },
            {
                id: 5,
                name: '체리',
                imges: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIKmxEhVPYoWzlcG9o8NJo89zG6jjJrPyEiA&usqp=CAU',
                stock: 7,
                demand: 3,
                price: 20000,
                isPrime: true,
            }
            , {
                id: 6,
                name: '오렌지',
                imges: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQjpORB1sK7LuTVkoGMxmsR40wPmed0SYy7Lg&usqp=CAU',
                stock: 5,
                demand: 8,
                price: 20000,
                isPrime: true,
            }
        ],
        basketNumber: 0
    }
    // '담기' 이벤트 함수 구현 ID 값을 가져와서 객체 id값과 일치하면 그 값을 업데이트 해주도록 구현
    handlePlusClick = (id) => {
        const { basketNumber, list } = this.state
        this.setState({
            //담기 함수 클릭시 장바구니 값도 업데이트
            basketNumber: basketNumber + 1,
            list: list.map(
                info => info.id === id ? ({ ...info, demand: info.demand + 1, stock: info.stock - 1 }) : info
            )
        })
    }

    // '뺴기' 이벤트 함수 구현 ID 값을 가져와서 객체 id값과 일치하면 그 값을 업데이트 해주도록 구현
    handleMinusClick = (id) => {
        const { basketNumber, list } = this.state
        this.setState({
            //담기 함수 클릭시 장바구니 값도 업데이트
            basketNumber: this.state.basketNumber - 1,
            list: list.map(
                info => info.id === id ? ({ ...info, demand: info.demand - 1, stock: info.stock + 1 }) : info
            )
        })
    }

    //"수량"에 값이 없을 시 이벤트 방지 함수 구현
    handelstopClick = (e) => {
        try {
            e.preventDefault();
        } catch (e) {
            console.log("Error" + e)
        }
    }
    render() {
        const { list } = this.state
        return (
            <div className={ex('body')}>
                {/* Nav 컴포넌트에 장바구니  basketNumber/list state 값 전달 */}
                <Nav basketNumber={this.state.basketNumber} list={list} />
                <div className={ex('fruit_content')}>
                    <div className={ex('fruit_content_list')}>
                        {/* Menu 컴포넌트  list state 값 전달*/}
                        <Menu list={list} />
                        {/* list 배열 map 통해 값 보이도록 구현 */}
                        {this.state.list.map((item, idx) => {
                            // isPrime값이 아닐 경우 일반 과일만 보이도록 조건문 선언
                            if (!item.isPrime) {
                                return (
                                    <div className={ex('fruit_list_item')} key={idx}>
                                        <div className={ex('fruit_item')}>
                                            <h3></h3>
                                            <img src={item.imges} />
                                            <p>{item.name}</p>
                                            <p>{item.price}원</p>
                                            <p className={ex('fruit_item_p')}> 잔량 <span>{item.stock} </span></p>
                                            {item.demand === 0 ? (
                                                <div className={ex('fruit_item_button')}>
                                                    <button className={ex('fruit_item_btn')} onClick={() => this.handlePlusClick(item.id)}>담기</button>
                                                </div>
                                            ) : (
                                                    <React.Fragment>
                                                        <p className={ex('fruit_item_p')}>수량 <span>{item.demand}</span></p>
                                                        {item.stock === 0 ? (
                                                            <div className={ex('fruit_item_button')}>
                                                                <button className={ex('fruit_item_btn')} onClick={() => this.handelstopClick(item.id)}>담기</button>
                                                                <button className={ex('fruit_item_btn_02')} onClick={() => this.handleMinusClick(item.id)}>빼기</button>
                                                            </div>
                                                        ) : (
                                                                <div className={ex('fruit_item_button')}>
                                                                    <button className={ex('fruit_item_btn')} onClick={() => this.handlePlusClick(item.id)}>담기</button>
                                                                    <button className={ex('fruit_item_btn_02')} onClick={() => this.handleMinusClick(item.id)}>빼기</button>
                                                                </div>
                                                            )}
                                                    </React.Fragment>
                                                )}
                                        </div>
                                    </div>
                                )
                            }
                        }
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default Fruitpage
```
-----

## * Primepage.js

```
import React, { Component } from 'react';
import style from '../../App.scss';
import className from 'classnames';
import Nav from '../Nav/Nav';
import Menu from '../Menu/Menu';

const ex = className.bind(style);

class Primepage extends Component {
    // 실제 사용할 Data를 state에 선언
    state = {
        // list 라는 배열에 객체의 값 입력 (보내준 요청 파라미터 정보)
        list: [
            {
                id: 1,
                name: '귤',
                imges: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTI6CSFrN50oLgC3XHOqFIV9nfY-0qU12vB2g&usqp=CAU',
                stock: 0,
                demand: 1,
                price: 20000,
                isPrime: true,
            },
            {
                id: 2,
                name: '사과',
                imges: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbIRX40BEHDGSAORsk_cRxEAH0KqV-jwTxwA&usqp=CAU',
                stock: 5,
                demand: 4,
                price: 20000,
                isPrime: false,
            },
            {
                id: 3,
                name: '레몬',
                imges: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ9t3aevrXZ8KWoXJFJntLu6FwqTunjOICyrA&usqp=CAU',
                stock: 8,
                demand: 4,
                price: 20000,
                isPrime: false,
            },
            {
                id: 4,
                name: '수박',
                imges: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4ly4Du2jHqmxvK0e_uojZN0C84mkXSKSVQg&usqp=CAU',
                stock: 1,
                demand: 6,
                price: 20000,
                isPrime: true,
            },
            {
                id: 5,
                name: '체리',
                imges: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIKmxEhVPYoWzlcG9o8NJo89zG6jjJrPyEiA&usqp=CAU',
                stock: 7,
                demand: 3,
                price: 20000,
                isPrime: true,
            }
            , {
                id: 6,
                name: '오렌지',
                imges: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQjpORB1sK7LuTVkoGMxmsR40wPmed0SYy7Lg&usqp=CAU',
                stock: 5,
                demand: 8,
                price: 20000,
                isPrime: true,
            }
        ],
        basketNumber: 0
    }
    // '담기' 이벤트 함수 구현 ID 값을 가져와서 객체 id값과 일치하면 그 값을 업데이트 해주도록 구현
    handlePlusClick = (id) => {
        const { basketNumber, list } = this.state
        this.setState({
            //담기 함수 클릭시 장바구니 값도 업데이트
            basketNumber: basketNumber + 1,
            list: list.map(
                info => info.id === id ? ({ ...info, demand: info.demand + 1, stock: info.stock - 1 }) : info
            )
        })
    }

    // '뺴기' 이벤트 함수 구현 ID 값을 가져와서 객체 id값과 일치하면 그 값을 업데이트 해주도록 구현
    handleMinusClick = (id) => {
        const { basketNumber, list } = this.state
        this.setState({
            //담기 함수 클릭시 장바구니 값도 업데이트
            basketNumber: this.state.basketNumber - 1,
            list: list.map(
                info => info.id === id ? ({ ...info, demand: info.demand - 1, stock: info.stock + 1 }) : info
            )
        })
    }
    //"수량"에 값이 없을 시 이벤트 방지 함수 구현
    handelstopClick = (e) => {
        try {
            e.preventDefault();
        } catch (e) {
            console.log("Error" + e)
        }
    }

    render() {
        const { list } = this.state
        return (
            <div className={ex('body')}>
                {/* Nav 컴포넌트에 장바구니  basketNumber/list state 값 전달 */}
                <Nav basketNumber={this.state.basketNumber} list={list} />
                <div className={ex('fruit_content')}>
                    <div className={ex('fruit_content_list')}>
                        {/* Menu 컴포넌트  list state 값 전달*/}
                        <Menu list={list} />
                        {/* list 배열 map 통해 값 보이도록 구현 */}
                        {this.state.list.map((item, idx) => {
                            // isPrime값이 아닐 경우 Prime 과일만 보이도록 조건문 선언
                            if (item.isPrime) {
                                return (
                                    <div className={ex('fruit_list_item')} key={idx}>
                                        <div className={ex('fruit_item')}>
                                            <h3>Prime</h3>
                                            <img src={item.imges} />
                                            <p>{item.name}</p>
                                            <p>{item.price}원</p>
                                            <p className={ex('fruit_item_p')}> 잔량 <span>{item.stock} </span></p>
                                            {item.demand === 0 ? (
                                                <div className={ex('fruit_item_button')}>
                                                    <button className={ex('fruit_item_btn')} onClick={() => this.handlePlusClick(item.id)}>담기</button>
                                                </div>
                                            ) : (
                                                    <React.Fragment>
                                                        <p className={ex('fruit_item_p')}>수량 <span>{item.demand}</span></p>
                                                        {item.stock === 0 ? (
                                                            <div className={ex('fruit_item_button')}>
                                                                <button className={ex('fruit_item_btn')} onClick={() => this.handelstopClick(item.id)}>담기</button>
                                                                <button className={ex('fruit_item_btn_02')} onClick={() => this.handleMinusClick(item.id)}>빼기</button>
                                                            </div>
                                                        ) : (
                                                                <div className={ex('fruit_item_button')}>
                                                                    <button className={ex('fruit_item_btn')} onClick={() => this.handlePlusClick(item.id)}>담기</button>
                                                                    <button className={ex('fruit_item_btn_02')} onClick={() => this.handleMinusClick(item.id)}>빼기</button>
                                                                </div>
                                                            )}
                                                    </React.Fragment>
                                                )}
                                        </div>
                                    </div>
                                )
                            }
                        }
                        )}
                    </div>
                </div>
            </div>
        )
    }

}

export default Primepage
```
-----

## * lib/api.js

```  
import axios from "axios";

//외부 API 호출 함수 구현
//동기식 API 
export const getApi = async () => {
    try {        
        return await axios.get('/api/fruits')
    } catch (error) {
        console.log(error)
    }
}
```
------
