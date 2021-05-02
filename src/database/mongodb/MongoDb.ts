import "dotenv/config";
import mongoose from 'mongoose';

class MongoDb {
  private DB_URL = process.env.MONGO_DB_URL;

  createConnection() {
    mongoose.connect(this.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
  }
}

export default MongoDb;