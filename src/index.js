import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import Phone from "./Phone";
import { createStore } from "redux";
import { reducer } from "./reducers/index";
import { Provider } from "react-redux";


const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
        <Phone/>
      </Router>
    </Provider>
  </React.StrictMode>,
  rootElement
);
