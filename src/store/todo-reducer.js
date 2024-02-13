

const initialState = {
  title: 'What to learn',
  task: [
    { id: 1, title: 'React', isDone: false },
    { id: 2, title: 'Redux', isDone: false },
    { id: 3, title: 'MobX', isDone: false }
  ]
}


export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD-TASK': {
      const newTask = {title: action.newTaskTitle, id: state.task.length + 1, isDone: false }
      state.task = [
        ...state.task,
        newTask
      ]

      return { ...state }
    }
    case 'CHANGE-STATUS': {
      const foundItem = state.task.find((item) => item.id === action.taskId)
      if (foundItem) {
        foundItem.isDone = !foundItem.isDone
      }
      return {...state}
    }
  }
  return state
}

export const changeStatus = (taskId) => {
  return { type: 'CHANGE-STATUS', taskId }
}

export const addTask = (newTaskTitle) => {
  return { type: 'ADD-TASK', newTaskTitle }
}