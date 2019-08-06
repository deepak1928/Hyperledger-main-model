import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.acme.airline.participant{
   export abstract class ACMEParticipant extends Participant {
      participantKey: string;
      contact: Contact;
   }
   export class Contact {
      fName: string;
      lname: string;
      email: string;
   }
   export class ACMENetworkAdmin extends ACMEParticipant {
   }
   export class ACMEPersonnel extends ACMEParticipant {
      department: string;
   }
   export class B2BPartner extends ACMEParticipant {
   }
// }
