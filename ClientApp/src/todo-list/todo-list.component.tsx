import { observer, inject } from 'mobx-react';

import './todo-list.component.css';


import * as React from 'react';

import Button from '../shared/button/button';
import * as classNames from 'classnames';
import { FilterTypes } from '../models/Filter-types';
import { action } from 'mobx';
import TodoItemComponent from './todo-item/todo-item.component';
import { TodoItem } from '../context/todo-item';
import { TodoList } from '../context/todo-list';

interface Props{
  todoListViewModel:TodoList;
}

@inject('todoListViewModel')
@observer
class TodoListComponent extends React.Component {
  private inputRef: React.RefObject<HTMLInputElement>
   store: TodoList;

   constructor(props:Props){
      super(props);
      this.store = props.todoListViewModel;
      this.inputRef = React.createRef();
  }

  addTodo(){
    if(this.inputRef.current){
     this.store.addTodo( this.inputRef.current.value );
     this.inputRef.current.value="";
    }
  }

  deleteTodo(todoTitle:string){
    this.store.deleteTodo(todoTitle);
  }

  completeTodo(todoTitle:string){
    this.store.completeTodo(todoTitle);
  }

  editTodo(todoTitle:string){
    this.store.editTodo(todoTitle);
  }

  isEditable(todo:TodoItem):boolean{
    return todo.isEditable;
  }

  keyPress(e: any){
    if(e.keyCode == 13){
      this.store.updateTodo(e.target.value);
    }
  }

  @action.bound
  resetEditable(){
    this.store.resetEditableTodo();
  }

  showAll(){
    this.store.applyFilter(FilterTypes.All);
  }

  showCompleted(){
    this.store.applyFilter(FilterTypes.Completed);
  }

  showActive(){
    this.store.applyFilter(FilterTypes.Active);
  }

  isFilterActive(filterType:FilterTypes):boolean{
    return this.store.filter === filterType;
  }

  public render(){       
        return (
      <div className="todo-list">
        <div className="header">
          <input placeholder="Add item" type="text" ref={this.inputRef}/>
          <Button value="Add" onClick={this.addTodo.bind(this)}/>
        </div>
        <Button value="All" isActive={()=>this.isFilterActive(FilterTypes.All)} onClick={this.showAll.bind(this)} />
        <Button value="Completed" isActive={()=>this.isFilterActive(FilterTypes.Completed)} onClick={this.showCompleted.bind(this)}/>
        <Button value="Active" isActive={()=>this.isFilterActive(FilterTypes.Active)} onClick={this.showActive.bind(this)}/>
        <ul>
          {this.store.getTodos.map((todo, index)=>{
            return <TodoItemComponent key={index} todoItem={todo} deleteTodo={this.deleteTodo.bind(this)}/>
          })}
        </ul>
      </div>
    );
}
  
}

export default TodoListComponent;
