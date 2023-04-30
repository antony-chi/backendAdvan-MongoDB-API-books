import { MongoClient } from "mongodb";

export async function connect() {
  try {
    const client = await MongoClient.connect("mongodb://127.0.0.1:27017", {
      useNewUrlParser: true,
    });
    //const client = MongoClient.connect('mongodb://localhost:27017')
    const db = client.db("DevF-DB");
    console.log("Database Connected");
    return db;
  } catch (error) {
    console.log("Ocurrio un error!" + error);
  }
}
