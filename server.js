const express = require('express');
const bodyParser = require('body-parser');
const operations1 = require('./Controllers/Operations');
const operations2 = require('./OrderInfo/Operations');
const client = require('./RedisClient');
const app = express();


app.use(express.json());



client.connect();

app.get('/data',(req,res) => {
  const {name} = req.body;
  res.json({message : `Hello, ${name ? name : 'World'}!`});
});

app.post('/data',async (req,res) =>{
  const message = req.body;
  
  if(message.MsgType==1121)
  {
    const tmp = await operations1.FindOutOperation(message);
    res.json({message : tmp})
  }
  else if(message.MsgType==1120)
  {
    const tmp = await operations2.FindOutOperation(message);
    res.json({message : tmp})
  }
  else
  {
    res.json({message: "Wrong Message Type"});
  }

});

const port = 3000;
app.listen(port,()=>{
  console.log(`Server is running on ${port}`);
});

