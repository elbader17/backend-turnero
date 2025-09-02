'use strict';

/**
 * turn service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::turn.turn');
