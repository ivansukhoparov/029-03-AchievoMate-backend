import {MongoClient} from "mongodb";
import 'dotenv/config'

const mongoUrl = process.env.MONGO_URL!

export const client = new MongoClient(mongoUrl);

export const runDb = async () => {
    try {
        await client.connect()
        await client.db("admin").command({ping: 1})
        console.log("Mongo server connection successful")
        console.log(`Mongo server ${mongoUrl}`)
    } catch {
        await client.close()
        console.log("Mongo server connection failed")
    }
}
