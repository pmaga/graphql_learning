
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull
} = require('graphql');

const MeType = require('./types/me');

const RootQueryType = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        me: {
            type: MeType,
            description: 'The current user identified by an api key',
            args: {
                key: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve: () => {

            }
        }
    }
});

const ncSchema = new GraphQLSchema({
    query: RootQueryType,
    //mutation: ''
});

module.exports = ncSchema;