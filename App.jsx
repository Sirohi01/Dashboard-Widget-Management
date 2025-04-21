import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Dashboard from './components/Dashboard';
import dashboardReducer from './store/dashboardStore';
import './styles.css';

const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
  },
});

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>Dashboard Widget Management</h1>
        <Dashboard />
      </div>
    </Provider>
  );
}

export default App;