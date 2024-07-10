/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:e6mPAFabcH2t@ep-lucky-king-a1o7n8o2.ap-southeast-1.aws.neon.tech/AIGenerateContent?sslmode=require',

    }
  };
