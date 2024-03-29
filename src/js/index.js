import {hello} from "./sub";
import _ from 'lodash';
import '../css/style.css';
import Icon from '../img/denshiba.png';

function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);

    return element;
}

console.log("Hello from index.js ;)");
document.body.appendChild(component());

hello();