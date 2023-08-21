import { registerAs } from '@nestjs/config';

export default registerAs('mongodb', () => {
  const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/defaultDb';

  return {
    uri: MONGO_URI,
  };
});
