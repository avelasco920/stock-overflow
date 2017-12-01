export const fetchCompanies = () => (
  $.ajax({
    method: 'GET',
    url: '/api/companies'
  })
);

export const fetchCompany = id => (
  $.ajax({
    method: 'GET',
    url: `/api/companies/${id}`
  })
);

export const fetchRealtimeData = sym => (
  $.ajax({
    url: `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${sym}&interval=1min&outputsize=compact&apikey=ZFC6ELK98CG1MD7Q`,
    type: "GET",
    dataType: "JSON",
    success: (resp) => {
      console.log(resp);
    },
    error (resp) {
      console.log(resp);
    }
  })
);
