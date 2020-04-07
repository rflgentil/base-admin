import React from 'react';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import './config/ReactotronConfig';

import { createMuiTheme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import indigo from '@material-ui/core/colors/indigo';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Routes from './routes';
import history from './services/history';

import { store, persistor } from './store';

function App() {
    const theme = createMuiTheme({
        palette: {
            type: 'dark',
            primary: blueGrey,
            secondary: indigo,
        },
    });

    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Router history={history}>
                        <Routes />
                        <ToastContainer autoClose={3000} />
                    </Router>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    );
}

export default App;
