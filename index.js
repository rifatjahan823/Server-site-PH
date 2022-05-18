const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000
//use middleware
app.use(cors());
app.use(express.json());


// Secret-Task-React-PH
//SnImRZ8QXEongUab


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Secret-Task-React-PH:<password>@cluster0.61x5s.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});



app.get('/', (req, res) => {
    res.send('Hello World!!')
  })
   
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })