const searchBar = document.getElementById('searchBar');
const videos = document.querySelectorAll('.video-card');

searchBar.addEventListener('input', () => {
  const query = searchBar.value.toLowerCase();
  videos.forEach(video => {
    const title = video.getAttribute('data-title').toLowerCase();
    video.style.display = title.includes(query) ? 'block' : 'none';
  });
});
