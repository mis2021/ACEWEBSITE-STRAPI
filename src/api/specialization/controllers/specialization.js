"use strict";

/**
 *  specialization controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
const { v4: uuid } = require("uuid");

module.exports = createCoreController('api::specialization.specialization');

// module.exports = {
//   lifecycles: {
//     beforeCreate: async (data) => {
//       if (!data.uuid) {
//         data.uuid = uuid();
       
//       }
//     },
//   },

// };
