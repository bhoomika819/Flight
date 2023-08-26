const express = require("express");
//require("dotenv").config();
const bodyParser = require("body-parser");
//const { City } = require("./models/index");
const { PORT } = require("./config/serverConfig");
const CityRepository = require("./repository/city-repository");
const ApiRoutes = require("./routes/index");

const { Airport, City } = require('./models/index');

// const db = require('./models/index');
// const sequelize = require('sequelize');
// const city = require('./models/city');

const setupAndStartServer = async()  => {

    //create the express object
    const app = express();
    //const PORT = 3000;

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended :true}));

    app.use("/api", ApiRoutes);

    app.listen(PORT, async() => {
        console.log(`Server is started at ${PORT}`);
        
        if(process.env.SYNC_DB)  {
       db.sequelize.sync({alter: true});
        }
    //    const city = await City.findOne({
    //     where: {
    //         id: 9
    //     }
    //    });
    //    const airports = await city.getAirports(); 
     
    //    console.log(city, airports);
        // const airports = await Airport.findAll({
        //     include: City
        // });
        // console.log(airports);
       // console.log(City);
       // const repo = new CityRepository();
        //repo.createCity({ name : "New Delhi"});
        //console.log(process.env);
    });

} 

setupAndStartServer();