/* main.js (Node context)
    create windows
    handle system events
    set initial window-state
    handle window closure
*/

const {app, BrowserWindow} = require('electron')
const fs = require('fs')
const path = require('path')

global.asdf = 123

let mainWindow  // Keep a reference of the window object to avoid garbage collection

/* */

function asdf(val) {
  if (val) global.asdf = val

  return global.asdf
}

function closeMainWindow() {
  mainWindow = null    // dereference the corresponding element.
}

function createMainWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
    }
  })

  mainWindow.loadFile('client/index.html')  // and load the index.html of the app.

  // mainWindow.webContents.openDevTools()  // Open the DevTools.

  mainWindow.on('closed', closeMainWindow)
}

/* */

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createMainWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()  // macOSBS
})

app.on('activate', function () {
  if (mainWindow === null) createMainWindow()  // macOSBS
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
