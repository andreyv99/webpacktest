import _ from 'lodash';
import toUpperCase from './mod/utils.js';
import './app.css';
var arr = ['a', 'b', 'c'].map(toUpperCase);
document.querySelector("#content").innerHTML = "conteneeeet";
console.log(arr);