import _ from 'lodash';
import { ConfigurationError } from './errors';

/**
 * Validates a given channel mapping, throwing an error if it's invalid
 * @param  {Object} mapping
 * @return {Object}
 */
export function validateChannelMapping(mapping) {
  if (!_.isObject(mapping)) {
    throw new ConfigurationError('Invalid channel mapping given');
  }

  return mapping;
}


export function validateRoleMapping(mapping) {
  if (!_.isObject(mapping)) {
    throw new _errors.ConfigurationError('Invalid role mapping given');
  }

  return mapping;
}
