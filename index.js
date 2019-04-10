const os = require('os')

switch (os.platform()) {
    case "win32": 
        console.log('You are on a windows!')
        break
    default:
        console.log('You appear to be on an unsupported platform :(')
}