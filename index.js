import { WebSocketServer } from 'ws';
import si, { cpu } from "systeminformation";

//process.env.PORT || 3000
const wss = new WebSocketServer({ port: process.env.PORT || 3000 });

wss.on('connection', function connection(ws) 
{
  ws.on('message', function message(data) 
  {
    console.log('received: %s', data);
    ReceivedMessage(data, ws);
  });

  ws.send('ConnectedToSocketServer');

/*
  setInterval(async () => 
  {
    const cpuTemp = JSON.stringify((await si.currentLoad()).avgLoad);
    ws.send(cpuTemp);
  }, 9000);
  */

});

function ReceivedMessage(msg,ws)
{

  let firstThreeChars = msg.substring(0, 3);

  if(firstThreeChars == "God")
  {
    let start = str.indexOf('*') + 1; // position after '*'
    let end = str.indexOf('_'); // position of '_'
    let extractedString = str.substring(start, end);

    if(extractedString == "Speaks")
    {
      ws.send(msg);
    }

  }

if(msg == "hello")
{
console.log("HELLO RECEIVED")
}
else
{

}
}