export const fetchNewsArticles = () => (
  $.ajax({
    method: 'GET',
    url: '/api/newsarticles'
  })
);
