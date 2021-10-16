/*
const record = [
    { year: "1971", result: "N/A"},
    { year: "1970", result: "N/A"},
    { year: "1969", result: "W"},
    { year: "1968", result: "N/A"},
    { year: "1967", result: "N/A"}
];
*/

function superbowlWin(array){
    let winObj = array.find(item => item.result === "W")
    if (winObj){
        return winObj.year;
    }
    else {
        return undefined;
    }
};


//console.log(superbowlWin(record));
