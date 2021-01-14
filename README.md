# Example

```shell
$ npm install client-query
```


## server
Set up express like the example below
```javascript
const { MongoClient, ObjectId } = require("mongodb")
const express = require("express")
const {postRouter} = require("client-query")
const cors = require('cors')

const url = process.env.DB_URL

const client = new MongoClient(url, { useUnifiedTopology: true })

const app = express()
app.use(cors())
app.use(express.json())

const port = process.env.PORT || 5000

client.connect().then(async () => {
    console.log("Connected correctly to server")
    const db = client.db("employees") //db name

    // here you only need one end point that returns postRouter
    app.post('/', async (req, res) => {
        console.log(req.body)

        return postRouter(req, res, db, ObjectId)

    })

    app.listen(port, () => {
        console.log("app running")
    })
})
```

## client

```javascript
import {client} from "client-query"

const db = client({
        baseURL: "http://localhost:5000/",
        headers: {
            // Authorization: auth.getToken()
        }
    })
    

const addEmployee =  async ()=> {
  await db()
    .insertOne("employees", {firstName: "John", lasName:"Doe"})
    .then(data => {
      console.log(data)
    })
    .catch((err) => {
      console.log(err)
    })
}

const getEmployees = async ()=> {
  await db().find("members", {firstName:"John"}).then(results => {
      console.log(results)
  }).catch((err) => {
    console.log(err);
  });
  console.log(this.data)
  this.loading = false;
},

```

This library uses the mongodb Node.js API.
For more info refer to the mongodb [docs](https://docs.mongodb.com/drivers/node/)