const { City } = require("../models/index");

class CityRepository {
    async createCity({name}) {
        try{
            const city = await City.create({
                name
            });
            return city;
           }catch(error){
                console.log("Something went wrong in the repository layer");
                throw {error};
           }
    }

    async deleteCity(cityId) {
        try{
            // console.log("Oh yes!");
            // console.log(cityId);
            const city = await City.destroy({
                where: {
                    id: cityId
                },
            });
         //   console.log("nooo");
            return true;
        }catch(error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async updateCity(cityId, data){    // what u want to update,with what value you want to update it
        try {
           // console.log("repository  ",cityId);
           //the below approach also works but will not return updated object
           //if we are using Pg then returning: true can be used else not
            // const city = await City.update(data, {
            //     where: {
            //         id: cityId
            //     }
            //     });
            //for getting updated data in mysql we use the below approach
                 const city = await City.findByPk(cityId);
                 city.name = data.name;
                 await city.save();
                 return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getCity(cityId){
        try {
            // console.log("repository  ",cityId);
            // const city = await City.findOne({where: { 
            //     id: cityId
            // }});
            const city = await City.findByPk(cityId);    
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

     async getAllCities(){
        try {
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
     }
}
module.exports = CityRepository;