const { CityService} = require("../services/index");

const cityService = new CityService();

const create = async (req,res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: "Successfully created a city",
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create a city",
            err: error
        });
        
    }
}

//DELETE. -> /city/:id    where :id is a parameter i.e we can call it by req.params
const destory = async(req,res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully delete a city",
            err: error
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete a city",
            err: error
        });

    }
}

//GET -> /city/:id
const get = async(req,res) => {
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            dara: response,
            success: true,
            message: "Successfully able to fetch data",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete a city",
            err: error
        });        
    }
}

//Patch -> /city/:id -> req.body
const update = async(req,res) => {
    try {
        const response = await cityService.update(req.params.id,req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully able to update data",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete a city",
            err: error
        });
    }
}

module.exports ={
    create,
    destory,
    get,
    update
}