import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import "../node_modules/@lumino/dragdrop/style/index.css";
import "../node_modules/@lumino/widgets/style/index.css";
import "../node_modules/@lumino/default-theme/style/commandpalette.css";
import "../node_modules/@lumino/default-theme/style/datagrid.css";
import "../node_modules/@lumino/default-theme/style/dockpanel.css";
import "../node_modules/@lumino/default-theme/style/menu.css";
import "../node_modules/@lumino/default-theme/style/menubar.css";
import "../node_modules/@lumino/default-theme/style/scrollbar.css";
import "../node_modules/@lumino/default-theme/style/tabbar.css";

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />,
)
