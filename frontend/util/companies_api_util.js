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

export const fetchRealtimeDailyQuandlData = sym => (
  $.ajax({
    url: `https://www.quandl.com/api/v3/datasets/EOD/AAPL.json?api_key=frMsv5CuVZauLgdFzVnG`,
    type: "GET",
    dataType: "JSON",
  })
);

export const fetchRealtimeNasdaqDaily = sym => (
  $.ajax({
    headers: {
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Origin': '*'
    },
    crossDomain: false,
    url: `http://m.nasdaq.com/callbacks/NLsHandler2.ashx`,
    type: "POST",
    dataType: "JSON",
    data: {
      msg: "min",
      symbol: "AAPL",
      qesymbol: "AAPL"
    }
  })
);

window.fetchRealtimeNasdaqDaily = fetchRealtimeNasdaqDaily;
window.fetchRealtimeDailyQuandlData = fetchRealtimeDailyQuandlData;
