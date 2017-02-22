const { nodeEnv } = require('./util');
console.log(`Running in ${nodeEnv} mode...`);

const app = require('express')();

const query = process.argv[2];

const ncSchema = require('../schema');
const { graphql } = require('graphql');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server is listening on port ${PORT}');
});