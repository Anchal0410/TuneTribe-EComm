'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {
    // Add CORS middleware configuration
    strapi.config.middleware.settings.cors = {
      enabled: true,
      origin: ['https://tune-tribe-e-com.vercel.app/'], // Allowed origins
      headers: '*', // Allowed headers
      credentials: true
    };
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {
    console.log('Strapi application is starting...');
  },
};
