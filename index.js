function distanceFromHqInBlocks(someValue) {
    let hq = 42; 
    return Math.abs(someValue - hq);
  }
  function distanceFromHqInFeet(someValue) {
    let blocks = distanceFromHqInBlocks(someValue);
    return blocks * 264; 
  }
  function distanceTravelledInFeet(start, destination) {
    let distance = Math.abs(start - destination) * 264; 
    return distance;
  }
  function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    let fare;
  
    if (distance <= 400) {
      fare = 0;
    } else if (distance <= 2000) {
      fare = (distance - 400) * 0.02;
    } else if (distance <= 2500) {
      fare = 25;
    } else {
      return 'cannot travel that far';
    }
  
    return fare;
  }
        

