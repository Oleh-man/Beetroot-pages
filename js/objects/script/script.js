// Objects

// minimum 

// 1
const CAR = {
    made: 'Ford',
    model: 'Mustang',
    year: 1970,
    midSpeed: 100,
    tank: 60,
    fuelConsumption: 10,
    drivers: ['Oleh']
};

// 1.1 CAR INFO

CAR.carinfo = () => {
    for (let key in CAR) {
        return `${key}: ${CAR[key]}`;
    };
}

// 1.2 ADD DEIVER
CAR.addDriver = (driverName) => {
    CAR.drivers.push(driverName);
    return `Driver ${driverName} is added`;
}


// 1.3 CAR FUELING 
CAR.currentFuel = 0;
CAR.refuel = (liters) => {
    if(CAR.currentFuel < 60){
        CAR.currentFuel += liters;
        return `You just refueled your car for ${CAR.currentFuel} liters` ;
    }else if(CAR.currentFuel >= 60){
        CAR.currentFuel = 60;
        return console.log('Your tank is full');
    } 
    else {
        return console.log('Your tank is already full');
    }
};

// 1.4 

CAR.tripTime = (distance, driverName) => {
    // CALCULATES TIME
    let totalTime = Math.floor(distance / CAR.midSpeed);
    let hourStep = 4;
    let addHour = 0;
    while((totalTime - hourStep) > 0){
        addHour++;
        hourStep += 4;
    }

    let tripfuel = CAR.tank * CAR.fuelConsumption;

    if(CAR.drivers.includes(driverName) && distance < tripfuel){
        return `Have a nice trip ${driverName}, it takes you about ${totalTime + addHour} hours`;
    }else if(CAR.drivers.includes(driverName) && distance >= tripfuel){
        return `${driverName}, its a log distance, refuel yuor car on the road`;
    
    }else{
        return `Get out from a car or i'll call the pollice`
    }
        



}
