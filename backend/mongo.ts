import * as mongoose from 'mongoose';

const setMongo = async (): Promise<any> => {
  let mongodbURI: string;
  if (process.env.NODE_ENV === 'test') {
    mongodbURI = process.env.MONGODB_TEST_URI as string;
  } else {
    mongodbURI = process.env.MONGODB_URI as string;
  }
  await mongoose.connect(mongodbURI).catch((err: any) => {
    console.log(err);
  });
  console.log('Connected to the database');
};

export default setMongo;
