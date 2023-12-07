import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChangeActionPayload {
  color: string;
  backgroundImage?: File | null;
  time: string;
}

interface AddTaskActionPayload {
  description: string;
  completed: boolean;
  id: Number;
}

interface Task {
  id: Number;
  description: string;
  completed: boolean;
}

interface ListOfTasks {
  tasks: Task[];
}

interface PageState {
  value: {
    color: string;
    backgroundImage?: File | null;
    time: string;
  };
  listOfTasks: ListOfTasks;
}

const initialPageState: PageState = {
  value: {
    color: "black",
    backgroundImage: null,
    time: "25",
  },
  listOfTasks: {
    tasks: [],
  },
};

const pageSlice = createSlice({
  name: "page",
  initialState: initialPageState,
  reducers: {
    change: (state, action: PayloadAction<ChangeActionPayload>) => {
      state.value = {
        color: action.payload.color,
        backgroundImage: action.payload.backgroundImage,
        time: action.payload.time,
      };
    },
  },
});

const addTaskSlice = createSlice({
  name: "addTask",
  initialState: initialPageState,
  reducers: {
    addTask: (state, action: PayloadAction<AddTaskActionPayload>) => {
      state.listOfTasks.tasks.push({
        description: action.payload.description,
        completed: action.payload.completed,
        id: Math.random() * 100,
      });
    },
    toggle: (state, action: PayloadAction<AddTaskActionPayload>) => {
      state.listOfTasks.tasks.map((task) => {
        if (task.id === action.payload.id) {
          task.completed = !task.completed;
        }
      });
    },
  },
});

export const { change } = pageSlice.actions;
export const { addTask } = addTaskSlice.actions;
export const { toggle } = addTaskSlice.actions;

const rootReducer = {
  page: pageSlice.reducer,
  addTask: addTaskSlice.reducer,
  toggleTaskCompletion: pageSlice.reducer,
};

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
