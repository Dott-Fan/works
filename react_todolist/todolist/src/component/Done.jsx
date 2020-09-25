import React, { Component } from 'react';
import '../App.css';

class Done extends Component {
    render() {
        let { done } = this.props
        return (
            <div className='finished'>
                <h2>已经完成
                    <span id='end_num'>{ done.length }</span>
                </h2>
                <ul>
                    {
                        done.map((item,index) =>(
                            <li key={index} >
                                <p>{item}</p>
                                <button onClick={this.back.bind(this,index,item)} >返回</button>
                                <button onClick={this.delword.bind(this,index)} >删除</button>
                            </li>
                        ))
                    }
                </ul>
                
            </div>
        );
    }

    delword(index){
        // console.log( this.props )
        this.props.delIt(index)
    }
    back(index,word){
        console.log( this.props )
        this.props.backword(index,word)
    }
}

export default Done;
