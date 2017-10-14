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
});
