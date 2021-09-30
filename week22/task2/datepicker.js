
const datepicker = require('js-datepicker');

const picker = datepicker(document.getElementById("dateSelection"), {
    onSelect: (instance, date) => {
      // Do stuff when a date is selected (or unselected) on the calendar.
      // You have access to the datepicker instance for convenience.
      console.log(date);
    //   console.log(instance);
    }
});
console.log(picker);