const { CityRepository } = require("../repository");

class CityService {
    constructor(){
        thid.cityRepository = new CityRepository();
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
        try {
            const response = await this.cityRepository.deleteCity(cityId);
            return response;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async updateCity(cityId , data){
        try {
            const city = await this.cityRepository.updateCity(cityId,data);
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};   
        }
    }

    async getCity(cityId){
        try {
            const data = await this.cityRepository.getCity(cityId);
            return data;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
            
        }
    }
    
}

module.exports = CityService;