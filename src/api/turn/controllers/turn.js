'use strict';

/**
 * turn controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::turn.turn');
