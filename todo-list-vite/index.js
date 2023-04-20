import { configureStore } from '@reduxjs/toolkit';

import todosSlice from './src/Todo';

const store = configureStore({
    reducer: {
        todos: todosSlice.reducer,
    },
});

export default store;