import * as React from "react";
import './tab-menu.component.css';
import {Tab, Tabs} from 'react-bootstrap'
import { observer, inject } from "mobx-react";
import * as classNames from "classnames";
import { RootStore } from "../../store/root-store";
import TodoListComponent from "../todo-list/todo-list.component";
import RecipeListComponent from "../recipes/recipe-list/recipe-list.component";
import RecipeItemComponent from "../recipes/recipe-item/recipe.component";

export enum HeaderTabs{
    todoList,
    createRecipe,
    recipeList
}

interface Props{
    rootStore:RootStore;
}

@inject('rootStore')
@observer
 class TabMenuComponent extends React.Component<Props>{
     private rootContext: RootStore;

   constructor(props:Props){
      super(props);
      this.rootContext = this.props.rootStore;
   }

    private changeActiveTab(tab: HeaderTabs){
        this.rootContext.viewState.changeActiveTab(tab);
    }

    private getTabContent(){
       switch (this.rootContext.viewState.activeTab){
            case HeaderTabs.todoList: return <TodoListComponent todoList={this.rootContext.todoList}/>
            case HeaderTabs.createRecipe: return <RecipeItemComponent recipeList={this.rootContext.recipeList} />
            case HeaderTabs.recipeList: return <RecipeListComponent  recipeList={this.rootContext.recipeList}/>
       }
    }

    isActive(tab:HeaderTabs){
        return this.rootContext.viewState.activeTab === tab;
    }

   public render(){
        return( 
            <div>          
                <div className="header-tabs">
                    <ul className="tabs">
                        <li className={classNames({'active': this.isActive(HeaderTabs.todoList), 'todo-list-tab':true})}>
                            <a  onClick={()=>this.changeActiveTab(HeaderTabs.todoList)}> Todo List </a>
                        </li>
                        <li className={classNames({'active': this.isActive(HeaderTabs.createRecipe), 'create-recipe-tab':true})}>
                            <a onClick={()=>this.changeActiveTab(HeaderTabs.createRecipe)}> Create Recipe </a>  
                        </li>
                        <li className={classNames({'active': this.isActive(HeaderTabs.recipeList), 'recipe-list-tab':true})}>
                            <a onClick={()=>this.changeActiveTab(HeaderTabs.recipeList)}> Recipe List </a>  
                        </li>
                    </ul>
                </div>
              { this.getTabContent()}                         
                
            </div>            
        );

    }
}

export default TabMenuComponent;
