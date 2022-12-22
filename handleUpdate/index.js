const dynamoose = require('dynamoose');

const schema = new dynamoose.Schema({
  'id': String,
  'name': String,
  'phone': String,
});

const peopleModel = dynamoose.model('people-list', schema);

exports.handler = async (event) => {
  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
};
