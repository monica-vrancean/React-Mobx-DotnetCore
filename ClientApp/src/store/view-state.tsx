import { observable, action, computed } from "mobx";
import { HeaderTabs } from "../components/tab-menu/tab-menu.component";

export class ViewState{
    @observable headerActivatedTab: HeaderTabs = HeaderTabs.todoList;

    @computed get activeTab(){
        return this.headerActivatedTab;
    }

    @action.bound
    changeActiveTab(tab: HeaderTabs){
        this.headerActivatedTab = tab;
    }

}

export default new ViewState();