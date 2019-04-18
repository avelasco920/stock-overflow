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

export const fetchStockPrices = (sym, time_series) => (
  $.ajax({
    method: 'GET',
    url: `/api/stock_prices/${sym}/?time_series=${time_series}`
  })
);
