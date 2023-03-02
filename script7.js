// Mediator Pattern

// provides a set of objects which interact with each other, mostly by having
//     a central authority dictating the terms in between objects.

// we're basically interacting form the traffic tower to the airplane,
//     requesting the positions of the airplane, and then the airplane
//     actually can go ahead and provide its position to the traffic tower
//     by having that requestPositions ...

class TrafficTower {
  constructor() {
    this.airplanes = [];
  }

  requestPositions() {
    return this.airplanes.map((airplane) => {
      return airplane.position;
    });
  }
}

class Airplane {
  constructor(position, trafficTower) {
    this.position = position;
    this.trafficTower = trafficTower;
    this.trafficTower.airplanes.push(this);
  }

  requestPositions() {
    return this.trafficTower.requestPositions();
  }
}
