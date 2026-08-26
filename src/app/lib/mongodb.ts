import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_URI || "";

type GlobalMongo = typeof globalThis & {
  _mongoClientPromise?: Promise<MongoClient>;
};

export interface DatabaseConnection {
  db: Db;
  client: MongoClient;
}

async function getClient(): Promise<MongoClient> {
  if (!uri) {
    throw new Error("MONGODB_URI is not set");
  }
  const globalForMongo = globalThis as GlobalMongo;
  if (!globalForMongo._mongoClientPromise) {
    globalForMongo._mongoClientPromise = new MongoClient(uri).connect();
  }
  return globalForMongo._mongoClientPromise;
}

async function connectNamed(name: string): Promise<DatabaseConnection> {
  const client = await getClient();
  return { client, db: client.db(name) };
}

export async function connectToMongodbProperties(): Promise<DatabaseConnection> {
  return connectNamed("properties");
}

export async function connectToMongodbEquipment(): Promise<DatabaseConnection> {
  return connectNamed("equipment");
}

export async function connectToMongodbMaterials(): Promise<DatabaseConnection> {
  return connectNamed("materials");
}

export async function connectToMongodbVisitors(): Promise<DatabaseConnection> {
  return connectNamed("snhipVisitors");
}
