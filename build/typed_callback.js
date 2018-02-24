"use strict";
function callingFunction(initialText, callback) {
    callback(initialText);
}
function myCallBack(text) {
    console.log("inside myCallback " + text);
}
callingFunction("myText", myCallBack);
//# sourceMappingURL=typed_callback.js.map