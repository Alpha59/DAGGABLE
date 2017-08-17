"use strict";

const channels = [{
  id: 1,
  name: 'soccer',
}, {
  id: 2,
  name: 'baseball',
}];

module.exports = {
  Query: {
    getUserById: (root, {id}) => {
      return channels;
    },
    getUserByEmail: (root, {email}) => {
      return channels;
    },
  },
};