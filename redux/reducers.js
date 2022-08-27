import {SET_TASK, SET_TASK_ID} from './actions';

const initialState = {
    task: [],
    taskID: 1,
}


function taskReducer (state = initialState, action) {
    switch (action.type) {
        case SET_TASK:
            return { ...state, task: action.payload}; 
        case SET_TASK_ID:
            return { ...state, taskID: action.payload}; 
        default:
            return state;
    }
}

export default taskReducer