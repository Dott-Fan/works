import React, { Component } from 'react';
import '../App.css';

class Willdo extends Component {
    
    render() {
        let { data } = this.props
        console.log(data)
        return (
            <div className ='doing'>
                <h2>正在进行
                    <span id='doing_num'>{ data.length }</span>  
                </h2>
                <ol>
                    {
                        data.map((item,index) =>(
                            <li key={index} >
                                <p>{item}</p>
                                <button onClick={this.next.bind(this,index,item) }>完成</button>
                                <button onClick={ this.deldo.bind(this, index)}>删除</button>
                            </li>
                        ))
                    }
                </ol>
            </div>
        );
    }

    next(index,word){
        this.props.end(index,word)
    }
    deldo(index){
        this.props.deldoing(index)
    }
}

export default Willdo;
