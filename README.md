# Welcome to Flight Service

## Project Setup
- clone the project on your local
- Execute `npm install` on the same path as of your root directory of the downloaded project
<<<<<<< HEAD
- Create a `.env` file in the root directory and add the following environment variable
   -PORT = 3000
- Inside the `src/conig` folder create a new file `config.json` and then add the following piece of json
=======
-Create a `.env` file in the root directory and add the following environment variable
   -PORT = 3000
-Inside the `src/conig` folder create a new file `config.json` and then add the following piece of json
>>>>>>> 8da65bb77669e4f41ee27f95106b7a71847e42be

```````````
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": "<YOUR_DB_PASSWORD>",
    "database": "Flight_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```````````
- Once you've addes your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create` and then execute

`npx sequelize db:migrate`

`````````````````````````
## DB Design
 - Airplane Table
 - Flighr
 - Airport
 - City

 - A flight belongs to an airplane but one airplane can be used in multiple flights
 - A city has many airports but one airport belongs to a city
 - One airport can have many flights, but a flight belongs to one airport

 ## Tables

 ### City -> id,name,created_at,updated_at
 ### Airport -> id,name,address,city_id,created_at,updated_at
      Relationship -> City has many airports and Aitport belongs to a city (one to many)

````
npx sequelize model:generate --name Airport --attributes
name:String,address:String,cityId:integer 
``