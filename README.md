# Nodekeb

Api Ads buy and sell

## Install

npm install

### Start database

npm run install_db

## Start

Aplication:

npm start

Development:
 npm run dev

 ## Api Reference

 ## List "Anuncios"

 method
 - GET:
 /api/anuncios

 return json with list for "Anuncios".

 - GET filters:
 /api/anuncios?=name="name"?sale="true"?price="000"?tags="tags"?limit="10"?skip="1"

. limit: number limited in list, pagination.
. skip: skip in result
. name: { type: String },
. price: { type: Number },
.  sale: { type: Boolean },
.   tags: {type: [String]}

- GET: ID
 /api/anuncios/id
 return "Anuncio" for ID.


- GET: /api/anuncios/tags

Returns a list in tags json .

{
    "tags": [
        "lifestyle",
        "work",
        "motor",
        "mobile"
    ]
} 
## json Example:

{
"tags": [
"lifestyle",
"mobile",
"electronic"
],
"_id": "5e9ad2cfc2011f86d0ac5cae",
"name": "Macbook",
"sale": true,
"price": 8000,
"__v": 0
},

