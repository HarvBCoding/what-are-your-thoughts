// function to format a timestamp
module.exports = (timestamp) => {
    const months = {
        0: 'Jan',
        1: 'Feb',
        2: 'Mar',
        3: 'Apr',
        4: 'May',
        5: 'Jun',
        6: 'Jul',
        7: 'Aug',
        8: 'Sep',
        9: 'Oct',
        10: 'Nov',
        11: 'Dec'
    }

    const dateObj = new Date(timestamp);
    const monthFormat = months[dateObj.getMonth()];

    const dayOfMonth = dateObj.getDate();

    const year = dateObj.getFullYear();
    
    let hour;

    // check for 24-hour time
    if (dateObj.getHours > 12) {
        hour = dateObj.getHours() - 12
    } else {
        hour = dateObj.getHours();
    }

    // if hour is 0 (12am), change it to 12
    if (hour === 0) {
        hour = 12;
    }

    let minutes;

    if (dateObj.getMinutes() < 10) {
        minutes = "0" + dateObj.getMinutes()
    }

    let periodOfDay;

    if (dateObj.getHours() >= 12) {
        periodOfDay = 'pm';
    } else {
        periodOfDay = 'am';
    }

    const formattedTime = `${monthFormat} ${dayOfMonth}, ${year} at ${hour}:${minutes} ${periodOfDay}`;

    return formattedTime;
};