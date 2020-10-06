import React from "react";
import ReactDOM from "react-dom";
import App from "./app/index";
import * as serviceWorker from "./serviceWorker";
import Provider from "./store/config";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "store/config";
import "./styles/tailwind.output.css";
import "./styles/index.scss";
// import i18n (needs to be bundled ;))
import "./localization";
// moment locales
import "moment/locale/ru";
import "moment/locale/hy-am";
import "moment/locale/en-au";

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
