import {observer, inject} from "mobx-react";
import * as React from "react";
import {action} from "mobx";
import * as classNames from "classnames";
import {TodoItemStatus} from "../../models/todo-model";
import { RecipeItemViewModel } from "../../view-models/recipe-view-model";
import { RecipeListViewModel } from "../../view-models/recipe-list-view-mdel";
import './recipe.component.css';

interface Props {
    recipeListViewModel : RecipeListViewModel
}
export interface Recipe{
    title:string;
    description:string;
    servings: number;
    duration: string;
    difficulty: number;
    image?: File;
}
interface State extends Recipe{
    fileInputValue:string;
}


const initialState ={
    title:'',
    description:'',
    duration:'',
    difficulty:3,
    servings:0,
    fileInputValue:'',
    image:undefined

};

@inject('recipeListViewModel')
@observer
class RecipeItemComponent extends React.Component <any, State > {
    servingsRange:number[];
  private fileInputRef: React.RefObject<HTMLInputElement>


    constructor(props : Props) {
        super(props);        
        this.state= initialState;

        this.handleSubmit = this
            .handleSubmit
            .bind(this);
            
        this.createRange(24);
        this.fileInputRef = React.createRef();

    }
    componentDidMount(){
       // this.setState(initialRecipe);

    }

    handleSubmit(event : any) {
        event.preventDefault();
        const data = new FormData(event.target);
       // console.log(event.target, 'data', data.)
        this.props.recipeListViewModel.addRecipe(this.state);
        this.resetRecipe();

    }

    handleTitleChange(event:any){
        this.setState({title:event.target.value});
    }

    
    handleDescriptionChange(event:any){
        this.setState({description:event.target.value});
    }

    handleServingsChange(event:any){
        this.setState({servings:event.target.value});
    }

    keyPress(e : any) {
        if (e.keyCode == 13) {
            //this.store.updateTodo(e.target.value);
        }
    }

    createRange(max:number){
        this.servingsRange =[];
        for(let i=0; i<max; i++){
            this.servingsRange.push(i);
        }
    }

    handleDifficultyChange(event:any){
        this.setState({difficulty:event.target.value});

    }

    handleDurationChange(event:any){
        this.setState({duration:event.target.value});
    }

    handleImageChange(file:any){
        this.setState({image:file[0]});

    }

    private resetRecipe(){
        this.setState(initialState);
        if(this.fileInputRef.current){
            this.fileInputRef.current.value = '';
        }
    }

    public render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)} >
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input value={this.state.title} className="form-control recipeTitle" type="text" name="title" onChange={this.handleTitleChange.bind(this)} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Summary</label>
                    <input value={this.state.description} className="form-control recipeDescription" type="text" name="description" onChange={this.handleDescriptionChange.bind(this)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="servings">Servings</label>
                    <select value={this.state.servings} className="form-control servings"  name="servings" onChange={this.handleServingsChange.bind(this)}>
                       { this.servingsRange.map((index, key)=>  <option key={key} value={index}>{index}</option>)}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="duration">Duration</label>
                    <input value={this.state.duration} className="form-control recipeDuration" type="time" name="description" onChange={this.handleDurationChange.bind(this)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="difficulty">Difficulty</label>
                    <div className="difficulty-controls"> 
                        <input value={this.state.difficulty} className="form-control difficulty" type="range" name="difficulty" min="1" max="3" onChange={this.handleDifficultyChange.bind(this)} />
                        <div className="difficulty-level">
                            <span className="easy">Easy</span>
                            <span className="medium">Medium</span>
                            <span className="difficuty">Difficulty</span>
                        </div>
                    </div>
                </div>
                <input ref={this.fileInputRef} type="file" onChange={ (e) => this.handleImageChange(e.target.files) } />
                <button type="submit" className="btn btn-primary">Send recipe!</button>
            </form>
        );
    }

}

export default RecipeItemComponent;
