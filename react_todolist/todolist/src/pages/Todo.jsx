import React, { Component } from 'react';
import Done from '../component/Done';
import Thing from '../component/Thing';
import Willdo from '../component/Willdo';

class Todo extends Component {

    state={
        thing:'',
        willDo:[],
        doneList:[],
    }
    render() {
        return (
            <div>
                <Thing addword={ this.addword.bind(this) }></Thing>
                <div  className="main-con">
                <Willdo data={ this.state.willDo } deldoing={this.deldoing.bind(this)} end={this.end.bind(this)}></Willdo>
                <Done done={ this.state.doneList } delIt ={this.delIt.bind(this)} backword={this.backword.bind(this)}></Done>
                </div>
               
            </div>
        );
    }
    // 添加词语
    addword(word){
        this.setState(state => state.willDo.push( word ))
    }
    // 完成后将事件添加到已完成
    end(index,word){
        this.setState( state => state.willDo.splice(index,1 ))
        this.setState( state => state.doneList.push(word) )
    }
    // 正在进行中的删除
    deldoing(index){
        this.setState( state => state.willDo.splice(index,1 ))
    }
    // 在已经完成的部分，删除已有的事项
    delIt(index){
        this.setState( state => state.doneList.splice(index,1 ))
    }
    // 已经完成的返回到doing名单
    backword(index,word){
        this.setState(state => state.willDo.push( word ))
        this.setState( state => state.doneList.splice(index,1 ))
    }


}

export default Todo;
