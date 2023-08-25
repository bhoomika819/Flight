const { CityService} = require("../services/index");
//const { City } = require("../repository");
//const City = 'City';


/**
 * POST
 * data -> req.body
 */
const cityService = new CityService();

const create = async (req,res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: "Successfully created a city",
            err: {}
        });
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
const destroy = async(req,res) => {
    try {
      //  console.log(req.body,"body  ",req.params.id);
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully delete a city",
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

//GET -> /city/:id
const get = async(req,res) => {
    try {
       // console.log("HI",req.params.id);
        const response = await cityService.getCity(req.params.id);
      // const response = await this.cityRepository.getCity(cityId);
    //   const response = await City.findAll({where: { 
    //     id: req.params.id
    // }});
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully able to fetch data",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get  a city",
            err: error
        });        
    }
}

//Patch -> /city/:id -> req.body
const update = async(req,res) => {
    try {
      //  console.log("controller  ",req.body," & ",req.params);
        const response = await cityService.updateCity(req.params.id,req.body);
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
            message: "Not able to update a city",
            err: error
        });
    }
}

const getAll = async(req,res) => {
    try {
        const cities = await cityService.getAllCities(req.query);
        return res.status(200).json({
            data: cities,
            success: true,
            message: "Successfully able to fetch data",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch a cities",
            err: error
        });
    }
}

module.exports ={
    create,
    destroy,
    get,
    update,
    getAll
}