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

    async deleteCity({cityId}) {
        try{
            await City.destory({
                where: {
                    id: cityId
                }
            });
            return true
        }catch(error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async updateCity(cityId, data){    // what u want to update,with what value you want to update it
        try {
            const city = await City.update(data, {
                where: {
                    id: cityId
                }
                });
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getCity(cityId){
        try {
            const city = await City.findByPK(cityId);
            return City;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
}
module.exports = CityRepository;