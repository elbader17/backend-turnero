'use strict';

/**
 * turn router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::turn.turn');
