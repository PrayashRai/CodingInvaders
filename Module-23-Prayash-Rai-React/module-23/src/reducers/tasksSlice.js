import { createSlice } from '@reduxjs/toolkit'

const initialState = [];
const payload = {
    taskList: {
        title: "",
        deadline: "",
        description:"",
        priority: false,
        tags:"",
        image:""
    }
}

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  payload,
  reducers: {
    addTask: (state = initialState, payload) => {
        state.taskItems.push(payload.tasklist);
        console.log(state.taskItems[0][0]);
    }
  },
})

export const {addTask}= tasksSlice.actions;

export default tasksSlice.reducer