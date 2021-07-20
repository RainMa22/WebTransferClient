function handleClick(acode) {
  console.log('get '+acode);
  var exampleSocket = new WebSocket("ws://localhost:2020");
exampleSocket.onopen = function (event) {
	exampleSocket.send('get '+acode);
};
	

  exampleSocket.onmessage = function(event) {
	console.log(typeof (event.data));
   	console.log(event.data);
	exampleSocket.close();
  }
}
