import { MongoClient, ServerApiVersion } from "mongodb";

export default function dbConnect(collection_name) {
  const uri = "mongodb+srv://final-project:fbYwX33sTz4R4fY0@cluster0.kgmqz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  return client.db("finalProjectDB").collection(collection_name);
}
