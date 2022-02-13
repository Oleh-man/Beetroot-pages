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
        console.log(`${key}: ${CAR[key]}`);
    };
    // console.log(`${key}: ${CAR[key]}`);
}

// 2 ADD DEIVER
CAR.addDriver = (driverName) => CAR.drivers.push(driverName);


// 3 CAR FUELING 
CAR.currentFuel = 0;
CAR.refuel = (liters) => {
    if(CAR.currentFuel < 60){
        CAR.currentFuel += liters;
    }else {
        console.log('Your tank is already full');
    }
    if(CAR.currentFuel >= 60){
        CAR.currentFuel = 60;
        console.log('Your tank is full');
    } 
};

// 4 
CAR.tripTime = (distance) => {
    let totalTime = distance / CAR.midSpeed;
    let calcTime = totalTime;
    let newTime = 0;
    for(let i = calcTime; calcTime > 0; i--){
        if(calcTime % 4 !== 0){
            newTime += 1;
        }
    }
    console.log(totalTime)
}


// medium

// 1
let hours;
let minutes;
let seconds
const CLOCK = {
    hours: hours,
    minutes: minutes,
    seconds: seconds
}

