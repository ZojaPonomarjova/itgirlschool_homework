function formatDate(date) {
    let num = date;
    let endDate = new Date();
    let hoursToDisplay;
    let minutesToDisplay;
    let monthToDisplay;
    let dayToDisplay;
    let day = num.getDate();
    let month = 0 + num.getMonth() + 1;
    let year = num.getFullYear() % 100;
    let hours = num.getHours();
    let minutes = num.getMinutes();
    if (hours < 10) {
        hoursToDisplay = "0" + hours;
    } else {
        hoursToDisplay = hours;
    }
    if (minutes < 10) {
        minutesToDisplay = "0" + minutes;
    } else {
        minutesToDisplay = minutes;
    }
    if (month < 10) {
        monthToDisplay = "0" + month;
    } else {
        monthToDisplay = month;
    }
    if (day < 10) {
        dayToDisplay = "0" + day;
    } else {
        dayToDisplay = day;
    }
    // let options = {//альтернативное решение для вывода даты. Короче, но появляется запятая после года
    //     year: '2-digit',
    //     month: '2-digit',
    //     day: '2-digit',
    //     hour:'2-digit',
    //     minute: '2-digit',
    //     timezone: 'UTC',
    // }
    if (endDate - date < 1000) {
        return "прямо сейчас";
    } else if (endDate - date < 60 * 1000) {
        return `${(endDate - date)/1000} сек. назад`;
    } else if (endDate - date < 60 * 60 * 1000) {
        return `${(endDate - date)/60000} мин. назад`;
    } else {
        return `${dayToDisplay}.${monthToDisplay}.${year} ${hoursToDisplay}:${minutesToDisplay}`;
        // return date.toLocaleString("ru",options);
    }
}


alert(formatDate(new Date(new Date - 1))); // "прямо сейчас"

alert(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"

alert(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"

alert(formatDate(new Date(new Date - 86400 * 1000))); //"вчерашняя дата"