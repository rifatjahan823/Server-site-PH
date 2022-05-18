const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000
const { MongoClient, ServerApiVersion } = require('mongodb');
//use middleware
app.use(cors());
app.use(express.json());



const uri = `mongodb+srv://${process.env.SECRET_TASK_USER}:${process.env.SECRET_TASK_PASS}@cluster0.61x5s.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run() {
    try {
      await client.connect();
      const taskCollection = client.db("Secret-Task-React-PH").collection("task");

 //post and add new inventory
 app.post("/addtask",async(req,res)=>{
  const task = req.body;
  const getUserTask = await taskCollection.insertOne(task);
  res.send(getUserTask )
})
//show user task 
app.get("/addtask",async(req,res)=>{
    const query = {};
    const cursor = taskCollection.find(query);
    const tasks = await cursor.toArray();
    res.send(tasks );
})

    } 
    finally {
    
    }
  }
  run().catch(console.dir);



app.get('/', (req, res) => {
    res.send('Hello World!!')
  })
   
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })