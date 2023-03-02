import * as ReactDOMClient from 'react-dom/client';
import React from "react";

import "./index.css";


const root = ReactDOMClient.createRoot(document.getElementById('app'));

root.render(<h1>Hello, world!</h1>);