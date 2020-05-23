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

export const fetchStockPrices = (sym) => (
  $.ajax({
    method: 'GET',
    url: `/api/stock_prices/${sym}`
  })
);
