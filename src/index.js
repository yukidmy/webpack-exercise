import {hello} from "./sub";
import _ from 'lodash';
import './style.css';

function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    return element;
}

console.log("Hello from index.js ;)");
document.body.appendChild(component());

hello();