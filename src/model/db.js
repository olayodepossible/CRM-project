import mongoose from 'mongoose';
import settings from '../config/index.js'

let client;

const dbConnection = async () => {
  try {
    client = await mongoose.connect(settings.db.url);
    console.log('DB Connection successful');
  } catch (error) {
    console.log(`DB Connection Failed: ${error}`);
    process.exit(1);
  }
}


export default dbConnection;