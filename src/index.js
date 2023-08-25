const express = require("express");
//require("dotenv").config();
const bodyParser = require("body-parser");
//const { City } = require("./models/index");
const { PORT } = require("./config/serverConfig");
const CityRepository = require("./repository/city-repository");
const ApiRoutes = require("./routes/index");

const setupAndStartServer = async()  => {

    //create the express object
    const app = express();
    //const PORT = 3000;

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended :true}));

    app.use("/api", ApiRoutes);

    app.listen(PORT,() => {
        console.log(`Server is started at ${PORT}`);
       // console.log(City);
       // const repo = new CityRepository();
        //repo.createCity({ name : "New Delhi"});
        //console.log(process.env);
    });

} 

setupAndStartServer();