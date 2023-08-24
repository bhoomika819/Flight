const {FlightRepository , AirplaneRepository } = require('../repository/index');

class FlightService {

    constructor() {
        this.flightRepsitory = new FlightRepository();
        this.airplaneRepository = new AirplaneRepository();
    }

    async createFlight(data) {
        try { 
            console.log("Service ",data);
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            console.log("Airplane ",airplane);
            const flight = await this.flightRepsitory.createFlight({
                ...data, totalSeats:airplane.capacity
            });
            console.log("Flight ", flight); 
            return flight;
        }catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
}

/**
 * {
 * flightNumber,
 * airplaneId,
 * departureAirportId,
 * arrivalAirportId,
 * arrivalTime,
 * departureTime,
 * price,
 * totalSeats -> airplane
 * }
 */

module.exports = FlightService;