const {FlightRepository , AirplaneRepository } = require('../repository/index');
const compareTime  = require('../utils/helper');

class FlightService {

    constructor() {
        this.flightRepsitory = new FlightRepository();
        this.airplaneRepository = new AirplaneRepository();
    }

    async createFlight(data) {
        console.log("Data ",data);
        try {
            console.log("Hello");
            // if(!compareTime(data.arrivalTime,data.departureTime)){
            //     throw{ error : 'Arrival time cannot be less than departure time'};
            // }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            console.log("Airplane ",airplane);
            const flight = await this.flightRepsitory.createFlight({
                ...data, totalSeats:airplane.capacity
            });
            console.log("Flight ",flight);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getAllFlightData(data) {
        try {
            const flights = await this.flightRepsitory.getAllFlights(data);
            return flights;
        } catch (error) {
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