function UploadedTimeCalculate(data) {
    const updatedData = data.items.map((item) => ({
      ...item,
      timeAgo: calculateTimeAgo(item.snippet.publishedAt),
    }));
  
    return updatedData; // Return the updated data directly
  }
  
  function calculateTimeAgo(date) {
    let newDate = new Date(date);
    let currentTime = new Date();
  
    let videoPostedYear = newDate.getFullYear();
    let videoPostedMonth = newDate.getMonth() + 1;
    let videoPostedDay = newDate.getDate();
  
    let currentYear = currentTime.getFullYear();
    let currentMonth = currentTime.getMonth() + 1;
    let currentDay = currentTime.getDate();
  
    if (currentYear - videoPostedYear >= 1) {
      return currentYear - videoPostedYear + " year(s) ago";
    } else if (currentMonth - videoPostedMonth >= 1) {
      return currentMonth - videoPostedMonth + " month(s) ago";
    } else if (currentDay - videoPostedDay >= 1) {
      return currentDay - videoPostedDay + " day(s) ago";
    } else {
      return "Today";
    }
  }
  
  export default UploadedTimeCalculate;
  