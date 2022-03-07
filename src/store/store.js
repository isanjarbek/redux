import { configureStore } from "@reduxjs/toolkit";
import { tasksSlice } from "./slices/tasks";

import { authApi, clientsApi } from "./endpoints";

export const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [clientsApi.reducerPath]: clientsApi.reducer,
  },
});
