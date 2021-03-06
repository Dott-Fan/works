import React from 'react';
import CartCard from './style'

const index = () => {
    return (
            <CartCard>
            {/* 选择框 */}
                <div className='card'>
                    <div className='check'>
                        <i></i>
                    </div>
                    <div className='img'>
                        <img src="https://img09.yiguoimg.com/d/items/2020/200922/9288740780058934_300.jpg"/>
                    </div>
                    <div className='text'>
                        <h2>大闸蟹大闸蟹大闸蟹北京北极光北京北京</h2>
                        <p></p>
                        <p> <strong>￥</strong>468</p>
                    </div>
                    <div className='del'>
                        <i></i>
                    </div>
                    <div className='num'>
                        <span className='cut'>
                            <i></i>
                        </span>
                        <span className='input'>
                            1
                        </span>
                        <span className='add'>
                            <i></i>
                        </span>
                    </div>        
                </div>
                
            {/* 购物车的结算 */}
            <div className='cart-total'>
                <div className = 'allcheck'>
                    <i className='active'></i>全选
                </div>
                <div className='text'>
                    <p>合计(不含运费)：<b className="red">￥4580.00</b></p>
                    <span>已优惠: ￥0.00</span>
                </div>
                <div className='btn'>
                    <a>去结算</a>
                </div>
            </div>
        
    </CartCard>            

    );
}

export default index;
