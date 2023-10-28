'use strict';

/**
 * tools-e service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tools-e.tools-e');
