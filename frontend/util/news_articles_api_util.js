export const fetchNewsArticles = () => (
  $.ajax({
    method: 'GET',
    url: '/api/newsarticles'
  })
);

export const incrementCount = id => (
  $.ajax({
    method: 'PATCH',
    url: `/api/newsarticles/${id}`
  })
);
