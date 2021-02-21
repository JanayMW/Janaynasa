const key = 'gkcNtRPzeVcSBvGjQB6N85lOvqGc4a4YyaJ6aedR';




let searchButton = document.querySelector("#search")

searchButton.addEventListener("click", ()=>{
  console.log("button pressed")
  sendApiRequest()
})

async function sendApiRequest(){
  let API_KEY = "gkcNtRPzeVcSBvGjQB6N85lOvqGc4a4YyaJ6aedR"
  let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
  console.log(response)
  let data = await response.json()
  console.log(data)
  useApiData(data)
}


function useApiData(data){
  document.querySelector("#content").innerHTML += data.explanation
  document.querySelector("#content").innerHTML += `<img src="${data.url}">`
}






// remember to see if i really need this in order for the api network to not stall 

try {
  // Create the performance observer.
  const po = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      // Logs all server timing data for this response
      console.log('Server Timing', entry.serverTiming);
    }
  });
  // Start listening for `navigation` entries to be dispatched.
  po.observe({type: 'navigation', buffered: true});
} catch (e) {
  // Do nothing if the browser doesn't support this API.
}









