// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(drivers) {
    const newDrivers = [...drivers.slice(0,2,3)]
    return newDrivers
}
returnFirstTwoDrivers(drivers)

function returnLastTwoDrivers() {
    const newDrivers = [...drivers.slice(2,4,3)]
    return newDrivers;
}
returnLastTwoDrivers(drivers);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers] 

function createFareMultiplier(fare) {
    return fare => fare * fare 
}
const fareDoubler = fare => fare * 2;

const fareTripler = fare => fare * 3;

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers)
}

function selectDifferentDrivers(drivers, returnLastTwoDrivers) {
    return returnLastTwoDrivers(drivers)
} 