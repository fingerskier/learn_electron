/* index.js (browser context) 
*/
// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const { remote } = require('electron')

/* */

window.onload = function() {
    document.getElementById('main').innerHTML = 'Flarn Ghibbet'
    console.log(remote)
}