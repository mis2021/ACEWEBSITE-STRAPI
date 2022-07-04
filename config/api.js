module.exports = {

  rest: {
    defaultLimit: 25,
    maxLimit: 100,
    withCount: true,
  },
  graphql: {
    config: {
        endpoint: '/graphql',
        shadowCRUD: true,
        playgroundAlways: true,
        depthLimit: 7,
        amountLimit: 100,
        apolloServer: {
            tracing: false,
            introspection: true,
            playground:true
        }
    }
}
};

