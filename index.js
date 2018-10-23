'use strict';
const webscrot = require('./webscrot.js');
// strip script name
let args = process.argv.splice(2);

// todo this could be handled a bit better
// but until there are '-o' option support
// this will do just fine i'm sure
let url = args[0];
let filename = args[1];

if (!url) {
    console.log("Useage:\n  webscrot [URL] [FILENAME]\n");
    process.exit(1);
}

let urlParts = webscrot.getUrlParts(url);
if (!urlParts) {
    console.log("Invalid Url: " + url + "\n");
    process.exit(1);
}

if (!filename) {
    filename = urlParts.hostname + ".png";
}

let pngPattern =/\.png$/i;

if (!pngPattern.test(filename)) {
    filename = filename + ".png";
}

let options = {
    path: __dirname + '/' + filename,
};

webscrot.takeScreenShot(url, options)
