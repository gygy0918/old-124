var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
var locationModel = require('../../models/location');
var locationType = require('../types/location').locationType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
// Query
exports.queryType = new GraphQLObjectType({
    name: 'Query',
    fields: function () {
        return {
            location: {
                type: new GraphQLList(locationType),
                args:{
                    id:{
                        name:'id',
                        type:new GraphQLNonNull(GraphQLID)

                    }
                },
                resolve (root, params, options) {
                    return locationModel
                        .findById(params.id)
                        .exec();
                }
            }
        }
    }
});

