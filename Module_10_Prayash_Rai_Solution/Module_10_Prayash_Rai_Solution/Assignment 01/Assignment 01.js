let mainFun = (call) => {
    let inputMessage = (message) => {
        console.log(message);
    };
    call(inputMessage)
};
  //usage
let callBack = (outputMessage) => {
    outputMessage("Hello, World!");
  };
  