import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
import {Aircraft} from './org.acme.airline.aircraft';
// export namespace org.acme.airline.flight{
   export class Flight extends Asset {
      flightId: string;
      flightNumber: string;
      route: Route;
      aliasFlightNumber: string[];
      aircraft: Aircraft;
   }
   export class Route {
      origin: string;
      destination: string;
      schedule: Date;
   }
   export class CreateFlight extends Transaction {
      flightNumber: string;
      origin: string;
      destination: string;
      schedule: Date;
   }
   export class FlightCreated extends Event {
      flightId: string;
   }
   export class AssignAircraft extends Transaction {
      flightId: string;
      aircraftId: string;
   }
   export class AircraftAssigned extends Event {
      flightId: string;
      aircraftId: string;
   }
// }
