// Code your solution in this file!
const returnFirstTwoDrivers = function(array){
    let newArray = [];
    return newArray = array.slice(0, 2);
}

const returnLastTwoDrivers = function(array){
    let newArray = [];
    return newArray = array.slice(-2, array.length);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

createFareMultiplier = int => fare => fare * int;

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, selectingDrivers){
    return selectingDrivers(arrayOfDrivers);
}