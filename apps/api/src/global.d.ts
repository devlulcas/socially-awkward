declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      JWT_SECRET: string;
      MONGO_URI: string;
    }
  }
}
export {};
