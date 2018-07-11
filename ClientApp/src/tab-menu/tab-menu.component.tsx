import * as React from "react";
import './tab-menu.component.css';
import {Tab, Tabs} from 'react-bootstrap'
import TodoList from "../todo-list/todo-list";
import RecipeItemComponent from "../recipes/recipe-item/recipe.component";
import RecipeListComponent from "../recipes/recipe-list/recipe-list.component";
import { observer, inject } from "mobx-react";
import { ViewState } from "../store/view-state";
import * as classNames from "classnames";

export enum HeaderTabs{
    todoList,
    createRecipe,
    recipeList
}

interface Props{
    viewState: ViewState;
}

@inject('viewState')
@observer
 class TabMenuComponent extends React.Component{
     private viewState: ViewState;

   constructor(props:Props){
      super(props);
      this.viewState = props.viewState;
   }

    private changeActiveTab(tab: HeaderTabs){
        this.viewState.changeActiveTab(tab);
    }

    private getTabContent(){
        console.log(this.viewState.activeTab);
       switch (this.viewState.activeTab){
            case HeaderTabs.todoList: return <TodoList/>
            case HeaderTabs.createRecipe: return <RecipeItemComponent/>
            case HeaderTabs.recipeList: return <RecipeListComponent/>
       }
    }

    isActive(tab:HeaderTabs){
        return this.viewState.activeTab === tab;
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
            // <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
            //     <Tab eventKey={1} title="Todo List">
            //         <TodoList/>
            //     </Tab>
            //     <Tab eventKey={2} title="Create Recipe">
            //         <RecipeItemComponent/>
            //     </Tab>
            //     <Tab eventKey={3} title="Recipe List">
            //         <RecipeListComponent/>
            //     </Tab>
            // </Tabs>     
        );

    }
}

export default TabMenuComponent;
