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

export const fetchStockPrices = (symbol, )

export const fetchRealtimeIntradayData = sym => (
  $.ajax({
    url: `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${sym}&outputsize=full&apikey=${API_OPTIONS.alphaVantageApiKey}&interval=5min`,
    type: "GET",
    dataType: "JSON",
  })
);

export const fetchRealtimeDailyData = sym => (
  $.ajax({
    url: `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${sym}&outputsize=full&apikey=${API_OPTIONS.alphaVantageApiKey}`,
    type: "GET",
    dataType: "JSON",
  })
);
