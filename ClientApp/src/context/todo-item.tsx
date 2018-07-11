
import { observable, computed, action } from 'mobx';
import { TodoItemStatus } from '../models/todo-item-status';

export class TodoItem{
    @observable public title: string;
    @observable public status: TodoItemStatus;
    @observable public isEditable:boolean;

    constructor(title: string){
        this.title = title;
        this.status = TodoItemStatus.active;
        this.isEditable = false;
    }


    public completeTodo(){
        this.status = TodoItemStatus.completed;
    }

    public editTodo(){
        this.isEditable = true;
     }

    public updateTodo(newTodoValue: string){       
            this.title = newTodoValue;
            this.isEditable = false;        
    }

    @action
    public resetEditableTodo(){        
        this.isEditable = false;        
    }
}
