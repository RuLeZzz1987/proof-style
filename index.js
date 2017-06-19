import App from "./app";
import fs from 'fs';
import "./global-styles/global.scss";

fs.writeFileSync('./index.html', App());
