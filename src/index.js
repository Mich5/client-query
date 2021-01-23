import "babel-core/register";
import "babel-polyfill";

import axios from "axios";

// postRouter is a function that runs serverside
// Its core function is to route all post requests passed to it based on the extracted data
export const postRouter = async (req, res, db, ObjectId) => {
    const { collectionName, id, query, data, options } = req.body
    const collection = db.collection(collectionName)

    // insert a document into a collection
    if (req.body.type === 'insertOne') {
        try {
            return res.status(200).json(await collection.insertOne(data))
        } catch (error) {
            console.log(error)
            return res.status(200).send({ error: error.message })
        }

    // insert many documents into a collection
    } else if (req.body.type === 'insertMany') {
        try {
            return res.status(200).json(await collection.insertMany(data))
        } catch (error) {
            console.log(error)
            return res.status(200).send({ error: error.message })
        }

    // find all documents in a collection
    }else if (req.body.type === 'find') {
        try {
            return res.status(200).json(await collection.find(query).toArray())
        } catch (error) {
            console.log(error)
            return res.status(200).send({ error: error.message })
        }

    // find one document in a collection
    } else if (req.body.type === 'findOne') {
        try {
            return res.status(200).json(await collection.findOne(query))
        } catch (error) {
            console.log(error)
            return res.status(200).send({ error: error.message })
        }

    // find a document by it's _id
    } else if (req.body.type === 'findOneById') {
        try {
            return res.status(200).json(await collection.findOne({ "_id" : ObjectId(id) }))
        } catch (error) {
            console.log(error)
            return res.status(200).send({ error: error.message })
        }

    // update a document
    } else if (req.body.type === 'updateOne') {
        try {
            return res.status(200).json(await collection.updateOne(query, data, options))
        } catch (error) {
            console.log(error)
            return res.status(200).send({ error: error.message })
        }
    
    // update many documents
    } else if (req.body.type === 'updateMany') {
        try {
            return res.status(200).json(await collection.updateMany(query, data, options))
        } catch (error) {
            console.log(error)
            return res.status(200).send({ error: error.message })
        }

    // update a document by it's _id
    } else if (req.body.type === 'updateById') {
        try {
            return res.status(200).json(await collection.updateOne({ "_id" : ObjectId(id) }, data, options))
        } catch (error) {
            console.log(error)
            return res.status(200).send({ error: error.message })
        }

    // delete a document
    } else if (req.body.type === 'deleteOne') {
        try {
            return res.status(200).json(await collection.deleteOne(query))
        } catch (error) {
            console.log(error)
            return res.status(200).send({ error: error.message })
        }

    // delete documents
    } else if (req.body.type === 'deleteMany') {
        try {
            return res.status(200).json(await collection.deleteMany(query))
        } catch (error) {
            console.log(error)
            return res.status(200).send({ error: error.message })
        }

    // delete a document by it's _id
    } else if (req.body.type === 'deleteById') {
        try {
            return res.status(200).json(await collection.deleteOne( { "_id" : ObjectId(id) } ))
        } catch (error) {
            console.log(error)
            return res.status(200).send({ error: error.message })
        }

    // get aggregation operation results 
    } else if (req.body.type === 'aggregate') {
        try {
            return res.status(200).json(await collection.aggregate(query).toArray())
        } catch (error) {
            console.log(error)
            return res.status(200).send({ error: error.message })
        }
    
    
    // else
    } else {
        try {
            return res.status(200).json([])
        } catch (error) {
            console.log(error)
            return res.status(200).send({ error: error.message })
        }
    }
}


// query is a function responsible for sending query data to the server 
export const query = (config = { baseURL: "", headers: {} }) => {
    function http() {
        return axios.create(config)
    }

    return () => {
        return {

            //insert one
            insertOne(collectionName = String, data = Object) {
                return http().post('/', {
                    type: 'insertOne',
                    data,
                    collectionName
                }).then(res => {
                    if (res.data.error) {
                        console.error(res.data)
                        return
                    }
                    return res.data
                })
            },

            //insert many
            insertMany(collectionName = String, data = Array) {
                return http().post('/', {
                    type: 'insertMany',
                    data,
                    collectionName
                }).then(res => {
                    if (res.data.error) {
                        console.error(res.data)
                        return
                    }
                    return res.data
                })
            },

            // find
            find(collectionName = String, query = Object) {
                return http().post('/', {
                    type: 'find',
                    query,
                    collectionName
                }).then(res => {
                    if (res.data.error) {
                        console.error(res.data)
                        return
                    }
                    return res.data
                })
            },

            // findOne
            findOne(collectionName = String, query = Object) {
                return http().post('/', {
                    type: 'findOne',
                    query,
                    collectionName
                }).then(res => {
                    if (res.data.error) {
                        console.error(res.data)
                        return
                    }
                    return res.data
                })
            },

            // find by id
            findById(collectionName = String, id = String) {
                return http().post('/', {
                    type: 'findById',
                    id,
                    collectionName
                }).then(res => {
                    if (res.data.error) {
                        console.error(res.data)
                        return
                    }
                    return res.data
                })
            },

            // update many
            updateMany(collectionName = String, query = Object, data = Object, options = Object) {
                return http().post('/', {
                    type: 'updateMany',
                    query,
                    data,
                    options,
                    collectionName
                }).then(res => {
                    if (res.data.error) {
                        console.error(res.data)
                        return
                    }
                    return res.data
                })
            },

            // update one
            updateOne(collectionName = String, query = Object, data = Object, options = Object) {
                return http().post('/', {
                    type: 'updateOne',
                    query,
                    data,
                    options,
                    collectionName
                }).then(res => {
                    if (res.data.error) {
                        console.error(res.data)
                        return
                    }
                    return res.data
                })
            },

            // update by id
            updateById(collectionName = String, id = String, data = Object, options = Object) {
                return http().post('/', {
                    type: 'updateById',
                    id,
                    data,
                    options,
                    collectionName
                }).then(res => {
                    if (res.data.error) {
                        console.error(res.data)
                        return
                    }
                    return res.data
                })
            },

            // delete many
            deleteMany(collectionName = String, query = Object) {
                return http().post('/', {
                    type: 'deleteMany',
                    query,
                    collectionName
                }).then(res => {
                    if (res.data.error) {
                        console.error(res.data)
                        return
                    }
                    return res.data
                })
            },

            // delete one
            deleteOne(collectionName = String, query = Object) {
                return http().post('/', {
                    type: 'deleteOne',
                    query,
                    collectionName
                }).then(res => {
                    if (res.data.error) {
                        console.error(res.data)
                        return
                    }
                    return res.data
                })
            },

            // delete by id
            deleteById(collectionName = String, id = String) {
                return http().post('/', {
                    type: 'deleteById',
                    id,
                    collectionName
                }).then(res => {
                    if (res.data.error) {
                        console.error(res.data)
                        return
                    }
                    return res.data
                })
            },

            //aggregate
            aggregate(collectionName = String, query = Array) {
                console.log(query)
                return http().post('/', {
                    type: 'aggregate',
                    query,
                    collectionName
                }).then(res => {
                    if (res.data.error) {
                        console.error(res.data)
                        return
                    }
                    return res.data
                })
            },
        }
    }
}