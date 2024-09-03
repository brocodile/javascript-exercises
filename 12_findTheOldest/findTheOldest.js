const findTheOldest = function(people) {
    let oldest = people.reduce((accm, val) => {
        let yOD;
        let aYOD;
        if(["yearOfDeath"] in val) {yOD = val.yearOfDeath;}
        else {yOD = ((new Date()).getFullYear());}
        if(["yearOfDeath"] in accm) {aYOD = accm.yearOfDeath;}
        else {aYOD = ((new Date()).getFullYear());}

        let lived = yOD - val.yearOfBirth;
        let accmage = aYOD - accm.yearOfBirth;
        if(lived > accmage){
            accm = val;
        }
        return accm;
    },people[0]);
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
