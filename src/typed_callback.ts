function callingFunction(initialText: string,
    callback: (text: string) => void)
{
    callback(initialText);
}

function myCallBack(text: string) {
    console.log("inside myCallback " + text);
}

callingFunction("myText", myCallBack);