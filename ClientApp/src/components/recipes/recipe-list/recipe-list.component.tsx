import * as React from "react";
import './recipe-list.component.css';
import { inject, observer } from "mobx-react";
import RecipeItemSummaryComponent from "./summary/recipe-item-summary.component";
import { RecipeListStore } from "../../../store/recipe-list-store";

interface Props{
    recipeList:RecipeListStore;
  }

@observer
class RecipeListComponent extends React.Component<Props>{
    recipeList: RecipeListStore;

   constructor(props:Props){
      super(props);
      console.log('recipe', this.props)
      this.recipeList = props.recipeList;
  }

    public render(){       
        return (
      <div className="recipe-list">
       <ul>
          {this.recipeList.getRecipes.map((recipe, index)=>{
            return <RecipeItemSummaryComponent key={index} recipeItem={recipe}/>
          })}
        </ul>
      </div>
    );
}
}

export default RecipeListComponent;