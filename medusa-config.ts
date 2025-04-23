import { loadEnv, defineConfig } from '@medusajs/framework/utils'

loadEnv(process.env.NODE_ENV || 'development', process.cwd())

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: {
      storeCors: process.env.STORE_CORS!,
      adminCors: process.env.ADMIN_CORS!,
      authCors: process.env.AUTH_CORS!,
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    },
    redisUrl: process.env.REDIS_URL,
  },
  modules: [
    {
      resolve: "@medusajs/medusa/event-bus-redis",
      options: { 
        redisUrl: process.env.EVENTS_REDIS_URL,
      },
    },
    {
      resolve: "@medusajs/medusa/payment",
      options: {
        providers: [
          {
            // if module provider is in a plugin, use `plugin-name/providers/my-payment`
            resolve: "./src/modules/my-payment",
            id: "my-payment",
            options: {
              // provider options...
            }
          }
        ]
      }
    }
    // {
    //   resolve: "./src/modules/my-payment",
    // },
  ],
  // plugins: [
  //   {
  //     resolve: `medusa-events-webhooks`,
  //     options: {
  //       enableUI: true,
  //       TOKEN_SECRET: 'JrKSQgmXc7FUg7FyWeTK',
  //       MAX_RETRY_COUNT: 5,
  //     },
  //   },
  // ],
})
