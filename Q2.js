
if (localStorage.getItem('visitTheCount')) {
    
    var visitTheCount = parseInt(localStorage.getItem('visitTheCount'));
    visitTheCount++;
  } else {
    
    var visitTheCount = 1;
  }
  
  localStorage.setItem('visitTheCount', visitTheCount);
  
  alert("You have visited this site " + visitTheCount + " times.");
  