'use strict';

/**
 * doctor-department service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::doctor-department.doctor-department');
