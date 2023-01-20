import data from "../data";
let sortedData = data.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
const INIT_STATE = {contacts:sortedData,removingArr:[],removeSelected:false};

export default function contact_reducer(state=INIT_STATE,action){
    switch(action.type){
        case "SHOW":
            return {contacts:state.contacts,removingArr:[],removeSelected:true};
        case "HIDE":
            return {contacts:state.contacts,removingArr:[],removeSelected:false};
        case "ADD":
            return {contacts:[action.payload,...state.contacts],removingArr:state.removingArr,removeSelected:false};
        case "DEL":
            return {contacts:
                state.contacts.filter((e)=>!state.removingArr.includes(e.id)),
                removingArr:[],
                removeSelected:false
            };
        case "REM":
            let tempArrrem = state.removingArr;
            if (!tempArrrem.includes(action.payload)){
                tempArrrem.push(action.payload);
            }
            return {contacts:state.contacts,removingArr:tempArrrem,removeSelected:true};
        case "CANCEL":
            let tempArrca = state.removingArr.filter((e)=>e!==action.payload);
            return {contacts:state.contacts,removingArr:tempArrca,removeSelected:true};
        default:
            return state;
    }
}