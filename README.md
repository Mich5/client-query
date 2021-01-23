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
This library uses the mongodb Node.js API.
For more info refer to the mongodb [docs](https://docs.mongodb.com/drivers/node/)

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
  await db().find("employees", {firstName:"John"}).then(results => {
      console.log(results)
  }).catch((err) => {
    console.log(err);
  });
  console.log(this.data)
  this.loading = false;
},

```

## query methods

```javascript

insertOne(collectionName = String, data = Object) // inserts One document in a collection

insertMany(collectionName = String, data = Array) // inserts Many documents in a collection

find(collectionName = String, query = Object) // returns an array of documents in a collection

findOne(collectionName = String, query = Object) // returns a single document from a collection

findById(collectionName = String, id = String) // returns a single document from a collection based on the '_id'

updateMany(collectionName = String, query = Object, data = Object, options = Object) // updates many documents in a collection

updateOne(collectionName = String, query = Object, data = Object, options = Object) // updates a single document in a collection

updateById(collectionName = String, id = String, data = Object, options = Object) // updates a single document in a collection by it's '_id'

deleteMany(collectionName = String, query = Object) // deletes many documents in a collection

deleteOne(collectionName = String, query = Object) // deletes a single document in a collection

deleteById(collectionName = String, id = String) // deletes a single document in a collection by it's '_id'

aggregate(collectionName = String, query = Array) // returns aggregation results

```

## Aggregation Example
Refer to [mongoDB Docs](https://docs.mongodb.com/manual/reference/method/db.collection.aggregate/) for more info and examples on the aggregation pipeline

```javascript

const getEmployees = async ()=> {
  return await db().aggregate("employees", [
                     { $match: { department: "HR" } },
                     { $group: { _id: "$gender" },
                     { $sort: { total: -1 } }
                   ]).toArray()
},

```

