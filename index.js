import { WebSocketServer } from 'ws';
import si, { cpu } from "systeminformation";

//process.env.PORT || 3000
const wss = new WebSocketServer({ port: process.env.PORT || 3000 });

wss.on('connection', function connection(ws) 
{
  ws.on('message', function message(data) 
  {
    console.log('received: %s', data);
    ReceivedMessage(data);
  });

  ws.send('something');

  setInterval(async () => 
  {
    const cpuTemp = JSON.stringify((await si.currentLoad()).avgLoad);
    ws.send(cpuTemp);
  }, 9000);
});

function ReceivedMessage( msg)
{
if(msg == "hello")
{
console.log("HELLO RECEIVED")
}
else
{

}
}