import {MongoClient} from "mongodb";
import 'dotenv/config'

const mongoUrl = process.env.MONGO_URL || 'mongodb://0.0.0.0:27017'

export const client = new MongoClient(mongoUrl);

export const runDb = async () => {
    try {
        await client.connect()
        await client.db("admin").command({ping: 1})
        console.log("Mongo server connection successful")
        console.log(`Mongo server ${mongoUrl}`)
    } catch {
        console.log("Mongo server connection failed")
    }
}
