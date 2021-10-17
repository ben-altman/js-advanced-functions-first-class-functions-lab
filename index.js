// Code your solution in this file!
const returnFirstTwoDrivers = function(ray) {
    return ray.slice(0,2);
};

const returnLastTwoDrivers = function(ray) {
    return ray.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(value) {
    return function(fare) {
        return fare * value
    };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(ray, driverFunction) {
    return driverFunction(ray);
};