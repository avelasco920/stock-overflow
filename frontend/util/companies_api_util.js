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

export const fetchRealtimeIntradayData = sym => (
  $.ajax({
    url: `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${sym}&outputsize=full&apikey=ZFC6ELK98CG1MD7Q&interval=5min`,
    type: "GET",
    dataType: "JSON",
  })
);

export const fetchRealtimeDailyData = sym => (
  $.ajax({
    url: `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${sym}&outputsize=full&apikey=ZFC6ELK98CG1MD7Q`,
    type: "GET",
    dataType: "JSON",
  })
);
