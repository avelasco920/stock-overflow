export const fetchNewsArticles = () => (
  $.ajax({
    method: 'GET',
    url: '/api/newsarticles'
  })
);

export const fetchNewsArticle = id => (
  $.ajax({
    method: 'GET',
    url: `/api/newsarticles/${id}`
  })
);
