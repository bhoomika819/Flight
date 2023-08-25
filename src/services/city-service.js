const { CityRepository } = require("../repository/index");

class CityService { 
    constructor(){
        this.cityRepository = new CityRepository();
    }

    async createCity(data) {
        try {
             const city = await this.cityRepository.createCity(data);
             return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async deleteCity(cityId){
        //console.log("service  ",cityId);
        try {
           // console.log("inside ",cityId);
            const response = await this.cityRepository.deleteCity(cityId);
            return response;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async updateCity(cityId , data){
        try {
           // console.log("city ",cityId," and data ",data);
            const city = await this.cityRepository.updateCity(cityId,data);
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};   
        }
    }

    async getCity(cityId){
        try {
            //console.log("Service  ",cityId);
            const city = await this.cityRepository.getCity(cityId);
            return city ;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
            
        }
    }
    
}

module.exports = CityService;