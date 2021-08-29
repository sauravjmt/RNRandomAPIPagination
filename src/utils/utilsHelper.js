

export const dateFormatFrom = (dateString) => {

    var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    var dat1 = new Date(dateString);
    var date = dat1.getDate();
    var month = month[dat1.getMonth()];
    var year = dat1.getFullYear();
    format = date + " " + month + " " + year;
    // var lastDigitYr=year.toString()
    // console.log("******New Date Formate====>",dat1.getMonth()+1 + "/" + date + "/" + lastDigitYr.slice(2))
    return format;
  
  }




  export const dateFormat = (dateString) => {

    var month = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]
    var dat1 = new Date(dateString);
    var date = dat1.getDate();
    var month = month[dat1.getMonth()];
    var year = dat1.getFullYear();
    format = date + " " + month + " " + year;
    // var lastDigitYr=year.toString()
    // console.log("******New Date Formate====>",dat1.getMonth()+1 + "/" + date + "/" + lastDigitYr.slice(2))
    return format;
  
  }


export  function timeSince(date) {

    var seconds = Math.floor((new Date() -new Date(date) ) / 1000);
  
    var interval = seconds / 31536000;
  
    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }
 // var aDay = 24*60*60*1000;
  //console.log(timeSince(new Date(Date.now()-aDay)));
  //console.log(timeSince(new Date(Date.now()-aDay*2)));