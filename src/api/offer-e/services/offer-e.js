'use strict';

/**
 * offer-e service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::offer-e.offer-e');
