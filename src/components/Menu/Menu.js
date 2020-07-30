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
                    <Link to={`/Fruitpage`} >일반 식물</Link>
                </button>
                <button className={ex('fruitList_btn_03')}>
                    <Link to='/Primepage' ><span>Prime</span>식물</Link>
                </button>
            </div>
        )
    }
}

export default Menu