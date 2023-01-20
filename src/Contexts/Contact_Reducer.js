import data from "../data";

const INIT_STATE = {contacts:data,removingArr:[],removeSelected:false,search:"",view:""};

export default function contact_reducer(state=INIT_STATE,action){
    switch(action.type){
        case "SHOW":
            return {contacts:state.contacts,removingArr:[],removeSelected:true,search:state.search,view:state.view};
        case "HIDE":
            return {contacts:state.contacts,removingArr:[],removeSelected:false,search:state.search,view:state.view};
        case "VIEW":
            return {contacts:state.contacts,removingArr:state.removingArr,removeSelected:state.removeSelected,search:state.search,view:action.payload};
        case "SEARCH":
            return {contacts:state.contacts,removingArr:state.removingArr,removeSelected:state.removeSelected,search:action.payload,view:state.view};
        case "ADD":
            return {contacts:[action.payload,...state.contacts],removingArr:state.removingArr,removeSelected:false,search:state.search,view:state.view};
        case "DEL":
            return {contacts:
                state.contacts.filter((e)=>!state.removingArr.includes(e.id)),
                removingArr:[],
                removeSelected:false,
                search:state.search,
                view:state.view
            };
        case "REM":
            let tempArrrem = state.removingArr;
            if (!tempArrrem.includes(action.payload)){
                tempArrrem.push(action.payload);
            }
            return {contacts:state.contacts,removingArr:tempArrrem,removeSelected:true,search:state.search,view:state.view};
        case "CANCEL":
            let tempArrca = state.removingArr.filter((e)=>e!==action.payload);
            return {contacts:state.contacts,removingArr:tempArrca,removeSelected:true,search:state.search,view:state.view};
        default:
            return state;
    }
}