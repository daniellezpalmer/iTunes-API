let search = document.querySelector('.searchForm');


search.addEventListener('submit', function(event) {
  event.preventDefault();
  let textBox = document.querySelector('.textBox');
  let searchInput = textBox.value;
  let results = document.querySelector('.results');
  let url = 'https://itunes.apple.com/search?term=';
  let sectResults = document.querySelector('.results');
  let trackResult = '';
  let audio = document.querySelector('audio');

  fetch(url + searchInput)
    .then(function(response) {
      if (response.status !== 200) {
        console.log("Broken: " + response.status);
        return;
      } else {
        return response.json()
      }
    })
    .then(function(data) {
      // console.log(data.results);
      for (var i = 0; i < data.results.length; i++) {
        // console.log(data.results[i].trackName);
        trackResult += `
          <div class="result" id=${i}>
          <img src="${data.results[i].artworkUrl100}">
          <p>${data.results[i].trackName}</p>
          <p>${data.results[i].artistName}<p/>
          </div>
        `
      }
      sectResults.innerHTML = trackResult;
      return data;
    })
    .then(function(data) {
      let allResultDivs = document.querySelectorAll('.result');
      allResultDivs.forEach(function(e) {
        e.addEventListener('click', function(clickEvent) {
          // console.log(clickEvent.path[1].id);
          // console.log(data.results[clickEvent.path[1].id].previewUrl);
          let audioPlayer = document.querySelector('audio');
          audioPlayer.src = data.results[clickEvent.path[1].id].previewUrl;
        })
      })
    })
});
