// Converts anything into a minute-based time (to use for runtime calculations)
function toMinutes(hour, minute) {

    let h = Number(hour);

    return (h || 0 ) * 60 + (Number(minute) || 0);
};

// Variation of above function to be used for showtimes, using the AM/PM period to determine the calculation method
function toShowtimeMinutes(hour, minute, period) {

    let h = Number(hour);

    if (period === "AM" && h === 12) {
        h = 0;
    }
    if (period === "PM" && h !== 12) {
        h += 12;
    }

    return (h || 0 ) * 60 + (Number(minute) || 0);
};

// Takes result from toShowtimeMinutes() and adds trailer allowance to estimate start time with minutes-based method
function estimateStartTime(showtimeMins, trailers) {
    
    return showtimeMins +(Number(trailers) || 0);

};

// Takes converted runtime and adds it to converted, estimated start time
function estimateEndTime(startMins, runtimeMins) {
    return startMins + runtimeMins;
}

export { toMinutes, toShowtimeMinutes, estimateStartTime, estimateEndTime};

// TODO: Write helper functions that will get passed into handleCalculate() which will get written in App.jsx

// User provides 1st movie runtime + start time
// 2nd movie runtime + start time
// need to convert 1st showtime to minutes
// need to convert 1st runtime to minutes then add trailer allowance to it and add all of this to the 1st showtime turned into minutes
// need to convert 2nd showtime to minutes + add trailer allowance
// compare the difference between estimated 2nd movie start time and 1st movie end time (substract)
// if a desired break length was entered, compare the desired length to the actual gap
// depending on the result, return the break length with the relevant message

// one function that takes (hours, minutes) and converts it all to a minute based number by doing (hours*60) + minutes

// one function that takes (showtime, runtime, trailer allowance) and adds together to calculate estimated end time
// this function will use the prior function to perform the conversions of the showtime/runtime

// one function that takes (showtime, trailer allowance) to calculate the estimated show start time (in minute based conversion)

// handleCalculate() function in App.jsx can do the comparison of the 1st movie end time and 2nd movie start time to calculate the gap between the movies as well as update the state for the message on the feasability status
