import * as React from "react";
import './recipe-item-summary.component.css';
import { RecipeItem } from "../../../../view-models/recipe";

interface Props{
    recipeItem: RecipeItem;
}

class RecipeItemSummaryComponent extends React.Component<Props>{
    public render(){
        return(
            <div className="recipe-summary"> 
                <div>
                    <img className="recipeImage" src={URL.createObjectURL(this.props.recipeItem.images[0])}/>
                </div>
                <div className="recipe-detail">
                    <span>{this.props.recipeItem.title}</span>
                    <button className="button button5">
                        <span className="glyphicon glyphicon-pencil edit"></span>
                    </button>
                </div>
            </div>
        );
    }
}

export default RecipeItemSummaryComponent;