const dynamoose = require('dynamoose');

const schema = new dynamoose.Schema({
  'id': String,
  'name': String,
  'phone': String,
});

const peopleModel = dynamoose.model('people-demo', schema);

exports.handler = async (event) => {

  let parsedBody = JSON.parse(event.body);
  console.log('parsed body', parsedBody);


  const response = { statusCode: null, body: null };

  try{
    let result = await peopleModel.update(event.pathParameters, parsedBody);
    console.log('Delete', result);
    response.statusCode = 200;
    response.body = JSON.stringify(result);
  }catch(e){
    response.statusCode = 500;
    response.body = JSON.stringify(e.message);
  }
  return response;
};
