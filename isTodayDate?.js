// IS DATE TODAY'S DATE
function isToday(date) {
    let today = new Date();
    if (date.toDateString === today.toDateString) {
      return true;
    }
    else {
      return false;
    } 
  }

  function isToday(date) {
    var d = new Date();
    return (d.getDate() == date.getDate() && d.getFullYear() == date.getFullYear() && d.getMonth() == date.getMonth());
  }