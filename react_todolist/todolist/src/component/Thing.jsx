import React, { Component } from 'react';
import '../App.css'

class Thing extends Component {
    // state={
    //     thing:''
    // }
    render() {
        return (
            <div id='topArea'>
                <header>
                    <h1 id="logo">ToDoList</h1>
                    <input type="text"  onKeyUp={this.add.bind(this)} placeholder="添加todolist"/>
                </header>
            </div>
        );
    }

    add(evt){
        console.log( evt.target.value )
        let word = evt.target.value
        if( evt.keyCode === 13 ){
            // this.props.addword( word )
            if( word.length > 2 || word.length === 2){
                word = word.replace(/x/ig,'&')
                console.log( word )
                this.props.addword(word) 
                evt.target.value = ''                
            }else{
                alert('您输入的字符小于2，不能提交，请继续输入')
                return
            }


        }
    }
}

export default Thing;
