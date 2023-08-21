const express = require("express");
//require("dotenv").config();

const { PORT } = require("./config/serverConfig");

const setupAndStartServer = async()  => {

    //create the express object
    const app = express();
    //const PORT = 3000;
    app.listen(PORT,() => {
        console.log(`Server is started at ${PORT}`);
        //console.log(process.env);
    });

}

setupAndStartServer();