import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Router from './Router';
import rootReducer from './slices';

const store = configureStore({
    reducer: rootReducer
});

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Router></Router>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
