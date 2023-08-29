const { Airplane }  = require('../models/index');

class AirplaneRepository {
   async getAirplane(id) {
      try {
        console.log("getAirplne ",id);
        const airplane = await Airplane.findByPk(id);
        console.log("Repsoitory ",airplane);
        return airplane;
      } catch (error) {
        console.log("Something went wrong in the repository layer");
        throw {error};
      }
   }
}

module.exports = AirplaneRepository;