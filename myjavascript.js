var injectedClockDiv = document.createElement('div');
injectedClockDiv.id = 'injected_clock';
document.body.append(injectedClockDiv);


function startTime() {
  if(injectedClockDiv != null)
  {
	var currentDate = new Date();
	injectedClockDiv.innerHTML =  currentDate.toLocaleString()
  }
  setTimeout(startTime, 1000);
}

startTime();
