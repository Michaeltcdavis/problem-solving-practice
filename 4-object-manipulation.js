const drivers = {
  AgF4g: { name: 'Daniel Ricciardo', team: 'Renault F1 Team', cars: ['Toyota Corolla 2018', 'BMW M3', "F1"] },
  FfE4c: { name: 'Lando Norris', team: 'McLaren', cars: ['DB8', 'CLK489', 'F1'] },
  Df4cf: { name: 'Sebastian Vettel', team: 'Ferrari', cars: ['BMW M3', 'F1'] },
  I4fTw: { name: 'Nicholas Latifi', team: 'Renault F1 Team', cars: ['F1'] },
  pT4vD: { name: 'Kimi Raikkonen', team: 'Alfa Romeo', cars: ['BMW M3', 'F1'] },
  RaMfV: { name: 'Romain Grosjean', team: 'Ferrari', cars: ['Opel Cadet'] },
}

// Q1.Write a function to return an array of all the drivers names

const getNames = function(driverObj) {
  const driverNames = [];
  for (const driver in driverObj) {
    driverNames.push(driverObj[driver].name)
  }
  return driverNames;
}

// Q2.Write a function that returns an object with the key being Team Name and the value being the drivers for that team

const getTeams = function(driverObj) {
  const teamObj = {};
  for (const driver in driverObj) {
    const team = driverObj[driver].team;
    if (!teamObj[team]) {
      teamObj[team] = [];
    }
    teamObj[team].push(driverObj[driver].name);
  }
  return teamObj;
}

// Q3.Write a function that takes this object and returns all the cars that were mentioned(no car should be listed more than once)

const getDistinctCars = function(driverObj) {
  const allCars = [];
  for (let driver in driverObj) {
    const cars = driverObj[driver].cars
    for (let car of cars) {
      if (!allCars.includes(car)) {
        allCars.push(car);
      }
    }
  }
  return allCars;
}

// Q4.Write a function That outputs an object, of every car, and drivers that drove that car

const getCarDrivers = function(driverObj) {
  const carDriverObj = {};
  const distinctCars = getDistinctCars(driverObj); //array
  for (let car of distinctCars) {
    for (let driver in driverObj) {
      const driverCars = driverObj[driver].cars;
      if (driverCars.includes(car)) {
        carName = car.split(' ')[0];
        if (!carDriverObj[carName]) {
          carDriverObj[carName] = []
        }
        carDriverObj[carName].push(driverObj[driver].name)
      }
    }
  }
  return carDriverObj;
}

console.table(getNames(drivers));
console.table(getTeams(drivers));
console.table(getDistinctCars(drivers));
console.table(getCarDrivers(drivers));