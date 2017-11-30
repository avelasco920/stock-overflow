export const searchCompanyDatabase = query => {
  return $.ajax({
    method: 'GET',
    url: 'api/company_search',
    data: { search: { query: query } }
  });
};
