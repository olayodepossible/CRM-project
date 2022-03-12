import mongoose from 'mongoose';
import settings from '../config/index'

let client;

const connect = async () => {
  try {
    client = await mongoose.connect(settings.db.url);
    console.log('DB Connection successful');
  } catch (error) {
    console.log(`DB Connection Failed: ${error}`);
    process.exit(1);
  }
};

export default connect;