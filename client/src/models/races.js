// models/races.js

const racesData = [
    { id: 'e45e8c03-2bbd-4e60-830a-80b60413442f', name: 'Bahrain Grand Prix', date: '2024-03-02', location: 'Bahrain International Circuit, Sakhir' ,image: require('../images/f1Tracks/Bahrain-circuit.png')},
    { id: '9672a03f-5c2e-4d76-98c0-fa0c2952edcd', name: 'Saudi Arabian Grand Prix', date: '2024-03-09', location: 'Jeddah Corniche Circuit, Jeddah',image: require('../images/f1Tracks/JeddahCircuit.png') },
    { id: 'c8803587-95bf-46c9-ae1a-f827d029dbff', name: 'Australian Grand Prix', date: '2024-03-24', location: 'Albert Park Circuit, Melbourne' ,image: require('../images/f1Tracks/AusGp.png')},
    { id: '63004f96-92cd-4b48-8fa6-7016271ca855', name: 'Japanese Grand Prix', date: '2024-04-07', location: 'Suzuka International Racing Course, Suzuka' ,image:require('../images/f1Tracks/JapaneseGP.png')},
    { id: '10d70f9e-ba8c-45bc-b3d2-0768f73235d6', name: 'Chinese Grand Prix', date: '2024-04-21', location: 'Shanghai International Circuit, Shanghai',image:require('../images/f1Tracks/ChinaGP.png') },
    { id: 'e93b0dfd-54c6-4c8e-8ac9-f267ac5bef6b', name: 'Miami Grand Prix', date: '2024-05-05', location: 'Miami International Autodrome, Miami Gardens, Florida' ,image:require('../images/f1Tracks/MiamiGp.png')},
    { id: 'a8cd826b-c30e-4a79-ac04-a2037c7403f6', name: 'Emilia Romagna Grand Prix', date: '2024-05-19', location: 'Imola Circuit, Imola',image:require('../images/f1Tracks/imola.png') },
    { id: '495d5c7f-4f96-4139-8b8c-c8f5a06ae8fc', name: 'Monaco Grand Prix', date: '2024-05-26', location: 'Circuit de Monaco, Monaco',image:require('../images/f1Tracks/MonacoGP.png') },
    { id: '322f3647-c4dd-4165-b76a-edb6d99db3de', name: 'Canadian Grand Prix', date: '2024-06-09', location: 'Circuit Gilles Villeneuve, Montreal',image:require('../images/f1Tracks/CanadianGP.png') },
    { id: '285f1807-385b-4f55-a116-060b1576abb5', name: 'Spanish Grand Prix', date: '2024-06-23', location: 'Circuit de Barcelona-Catalunya, Montmeló',image:require('../images/f1Tracks/SpanishGP.png') },
    { id: '311c83e8-7436-4322-af7e-1077f6eca039', name: 'Austrian Grand Prix', date: '2024-06-30', location: 'Red Bull Ring, Spielberg',image:require('../images/f1Tracks/AustrianGP.png') },
    { id: '06c64dbb-4956-4440-9f33-e8f68904c59e', name: 'British Grand Prix', date: '2024-07-07', location: 'Silverstone Circuit, Silverstone' ,image:require('../images/f1Tracks/BritishGP.png')},
    { id: '38446aa3-e92b-4c3a-afd1-32689a053efe', name: 'Hungarian Grand Prix', date: '2024-07-21', location: 'Hungaroring, Mogyoród',image:require('../images/f1Tracks/Hungaroring.png') },
    { id: '7b5f2e13-ebf3-4f9b-8f7e-e42cedb4865e', name: 'Belgian Grand Prix', date: '2024-07-28', location: 'Circuit de Spa-Francorchamps, Stavelot',image:require('../images/f1Tracks/BelgiumGp.png') },
    { id: '0c5da165-a44f-46fe-af7b-abef8478104f', name: 'Dutch Grand Prix', date: '2024-08-25', location: 'Circuit Zandvoort, Zandvoort',image:require('../images/f1Tracks/DutchGp.png') },
    { id: 'ea1be501-2729-4909-87d3-a81236415ad2', name: 'Italian Grand Prix', date: '2024-09-01', location: 'Monza Circuit, Monza',image:require('../images/f1Tracks/ItalianGP.png') },
    { id: '937969fe-67ea-4990-a0de-07701f512508', name: 'Azerbaijan Grand Prix', date: '2024-09-15', location: 'Baku City Circuit, Baku',image:require('../images/f1Tracks/BakuGP.png') },
    { id: 'efa4de30-9151-45b0-9311-42736e09a0e4', name: 'Singapore Grand Prix', date: '2024-09-22', location: 'Marina Bay Street Circuit, Singapore',image:require('../images/f1Tracks/Singapore-GP.png') },
    { id: '3388f005-8ea0-4962-a30f-2abf2bc7305e', name: 'United States Grand Prix', date: '2024-10-20', location: 'Circuit of the Americas, Austin, Texas',image:require('../images/f1Tracks/COTA.png') },
    { id: 'de024df4-26de-4e17-acb4-f8bdb59e1318', name: 'Mexico City Grand Prix', date: '2024-10-27', location: 'Autódromo Hermanos Rodríguez, Mexico City',image:require('../images/f1Tracks/MexicoGP.png') },
    { id: 'c2b1ac79-8d06-4feb-a85d-9227797494d5', name: 'São Paulo Grand Prix', date: '2024-11-03', location: 'Interlagos Circuit, São Paulo',image:require('../images/f1Tracks/brazil.png') },
    { id: '6eab79b3-26e1-4398-822a-b4228815121f', name: 'Las Vegas Grand Prix', date: '2024-11-23', location: 'Las Vegas Strip Circuit, Paradise, Nevada',image:require('../images/f1Tracks/Las-Vegas-GP.png') },
    { id: '7fecbdbc-03d7-45e3-be29-0cbe669fc660', name: 'Qatar Grand Prix', date: '2024-12-01', location: 'Lusail International Circuit, Lusail',image:require('../images/f1Tracks/QatarGP.png') },
    { id: 'a57c893a-cdfd-497d-8188-a35383926338', name: 'Abu Dhabi Grand Prix', date: '2024-12-08', location: 'Yas Marina Circuit, Abu Dhabi',image:require('../images/f1Tracks/AbuDhabiGP.png') },
  ];
  
  export default racesData;
  