export default {
    formatDate: function(dateToFormat) {
        const options = {
            year: "numeric",
            month:"2-digit",
            day:"2-digit"
            }
       
       return new Date(dateToFormat).toLocaleDateString("en-US",options);
    },
    sortDate: function(a,b) {
        return Date.parse(b.dob.date) - Date.parse(a.dob.date)

    },
  };
