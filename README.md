# deep-thoughts

[GraphQL](https://graphql.org/)

[Apollo Server](https://www.apollographql.com/docs/apollo-server/)

[React Router](https://reactrouter.com/) and [react-router-dom](https://www.npmjs.com/package/react-router-dom)

[if-env](https://www.npmjs.com/package/if-env) 


[jwt-decode](https://www.npmjs.com/package/jwt-decode) 

[faker](https://www.npmjs.com/package/faker)

[nodemon](https://www.npmjs.com/package/nodemon) 

Test Data:

"thoughts": [
      {
        "_id": "5f7e36b9c69f8a33a400d849",
        "username": "Bert65",
        "thoughtText": "vel reprehenderit ratione",
        "reactions": [
          {
            "_id": "5f7e36b9c69f8a33a400d89a",
            "createdAt": "Oct 7th, 2020 at 04:44 pm",
            "username": "Monica_Pfannerstill",
            "reactionBody": "aut quis quibusdam est aperiam"
          }
        ]
      }


QUERY
query getSingleUser($username: String!) {
  user(username: $username) {
    username
    friendCount
    thoughts {
      thoughtText
      createdAt
    }
    friends {
      username
    }
  }
}

QUERY VARIABLES
{
  "username": "Bert65"
}

RESPONSE

      {
  "data": {
    "user": {
      "username": "Bert65",
      "friendCount": 1,
      "thoughts": [
        {
          "thoughtText": "vel reprehenderit ratione",
          "createdAt": "Oct 7th, 2020 at 04:44 pm"
        }
      ],
      "friends": [
        {
          "username": "Francisca_Conn"
        }
      ]
    }
  }
}