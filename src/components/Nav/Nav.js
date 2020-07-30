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
            <h4>식물 가게</h4>
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