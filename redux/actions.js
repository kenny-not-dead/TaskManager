export const SET_TASK = 'SET_TASK';
export const SET_TASK_ID = 'SET_TASK_ID';


export const setTask = task => dispatch => {
    dispatch({
        type: SET_TASK,
        payload: task,
    });
};

export const setTaskID = taskID => dispatch => {
    dispatch({
        type: SET_TASK_ID,
        payload: taskID,
    });
};