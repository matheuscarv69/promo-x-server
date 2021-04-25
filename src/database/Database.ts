import mongoose from 'mongoose';

class Database {
  private DB_URL = 'mongodb://localhost:27017/promo-x';

  createConnection() {
    mongoose.connect(this.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
  }
}

export default Database;