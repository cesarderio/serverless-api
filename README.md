# serverless-api

Create a serverless REST API

[UML](./assets/UML.png)

[GitHub PR](https://github.com/cesarderio/serverless-api/pull/1)

// currently not working when deployed
[Deployed API](https://af3sbb07ra.execute-api.us-west-2.amazonaws.com/Production)

## Feature Tasks

Create a single resource REST API using a domain model of your choosing, constructed using AWS Cloud Services

* Database: DynamoDB
  * 1 Table required

* Routing: API Gateway

  * **POST**

  * */people* - Given a JSON body, inserts a record
        into the database

  * returns an object representing one record, by
        its id (##)

  * **GET**

    * */people* - returns an array of objects
        representing the records in the database

    * */people/##* - returns an object representing
        one record, by its id (##)

  * **PUT**

  * */people/##* - Given a JSON body and an ID (##),
      updates a record in the database

  * returns an object representing one record, by its id (##)

  * **DELETE**

  * */people/##* - Given an id (##) removes the
      matching record from the database

  * returns an empty object

* CRUD Operation Handlers: Lambda Functions

## Implementation

[Work in a non-main branch in a new repository called ‘serverless-api’. While your code will all reside in a single repo, your functions will need to be individually .zipped and deployed using common libraries (node_modules) and schema files.]

* Create one table for one data model at Dynamo DB

* Create a **Dynamoose** schema to define the structure of your table

* Write lambda functions that will separately perform the proper CRUD operation on the database

* Create your routes using API Gateway
Routes should integrate with the appropriate Lambda function to perform the operation

### Testing

Once you can assert the type of data coming back from Dynamoose and the type of input you’ll get from the API in the *event*, write the test cases for each Lambda function

## Docs

Provide a UML diagram showcasing the architecture of your API

Document the data and program flow for your API, including the mapping of Routes and Functions, as well as the flow of data.

* What is the root URL to your API?

// currently not working when deployed
[Deployed API](https://af3sbb07ra.execute-api.us-west-2.amazonaws.com/Production)

* What are the routes?

  * "/"

  * "/people-list"

    * **GET**

    * **POST** / **CREATE**

  * "/people-list/id"

    * **DELETE**

    * **PUT** / **UPDATE**

* What inputs do they require?

  * POST needs a JSON object with our schema layout
        {
          "id": String,
          "name": String,
          "phone": String
        }

  * DELETE needs an {id}

  * PUT needs a JSON object with information to update i.e.:
        {
          "phone": String
        }

* What output do they return?

  * GET gets all ids in database

  * POST shows the created item

  * id/DELETE shows id of deleted item.

  * UPDATE shows updated item
