import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './root/App';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core';

let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#cfe8fc',
    },
  }
});

theme = responsiveFontSizes(theme);

const EntryPoint = () => {
  return (
    <ThemeProvider theme={ theme }>
        <App/>
    </ThemeProvider>
  );
}

ReactDOM.render(<EntryPoint />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();