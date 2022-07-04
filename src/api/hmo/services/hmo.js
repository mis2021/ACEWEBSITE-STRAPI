'use strict';

/**
 * hmo service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hmo.hmo');
