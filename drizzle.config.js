import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: "postgresql",
  schema: './src/db/schema.js',
  out: './src/db/migrations',
  dbCredentials: {
    url: process.env.DATA_BASE_URL,
  },
  verbose: true,
  strict: true,
});