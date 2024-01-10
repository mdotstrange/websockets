import { WebSocketServer } from 'ws';

//process.env.PORT || 3000
const wss = new WebSocketServer({ port: process.env.PORT || 3000 });

wss.on('connection', function connection(ws) 
{
  ws.on('message', function message(data) 
  {
    console.log('received: %s', data);
  
    ReceivedMessage(data,ws)


  });

  ws.send('ConnectedToSocketServer');

});

function ReceivedMessage(msg,ws)
{

  /*
  let firstThreeChars = msg.substring(0, 3);

  if(firstThreeChars == "God")
  {
    let start = msg.indexOf('*') + 1; // position after '*'
    let end = msg.indexOf('_'); // position of '_'
    let extractedString = msg.substring(start, end);

    if(extractedString == "Speaks")
    {
      ws.send(msg);
    }
    */
}