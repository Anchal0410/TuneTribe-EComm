'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   */
  register({ strapi }) {
    // Add CORS middleware configuration dynamically
    const corsMiddleware = {
      name: 'strapi::cors',
      config: {
        enabled: true,
        origin: ['https://tune-tribe-e-com.vercel.app/'], // Allowed origins
        headers: '*', // Allowed headers
      },
    };

    // Add the CORS middleware to the existing middlewares
    strapi.config.middlewares = [...(strapi.config.middlewares || []), corsMiddleware];
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   */
  bootstrap({ strapi }) {
    console.log('Strapi application is starting...');
  },
};
