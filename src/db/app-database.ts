import { MongoClient, Db } from 'mongodb';
import { mongoUrl, dbName } from "../config";

export class AppDatabase {
  public client: MongoClient;
  public database: Db;

  public async connect() {
    this.client = this.client || await MongoClient.connect(mongoUrl, { useNewUrlParser: true })
    this.database = this.client.db(dbName);
    return this.database;
  }

  public async disconnect() {
    await this.client.close();
    this.client = null;
    this.database = null;
  }

  public async connectionStatus(): Promise<string> {
    const healty = 'Healthy';
    const bad = 'No DB Connection';
    try {
      await this.connect();
      await this.disconnect();
      return healty;
    } catch(error) {
      return bad;
    }
  }
}
