/**
 * Name: lang.js
 * This file is used to change language
 */

const url = new URL(window.location.href);
const language = url.searchParams.get('lang');
const path = window.location.pathname.split('/');
window.location.replace("./"+ language +"/" + path[path.length - 1]);
