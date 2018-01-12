export const selectInvestedCompanies = state => {
  const companies = state.entities.companies;
  const currentUser = state.session.currentUser;
  return currentUser.companies_invested.map((id) => companies[id]);
};

export const selectWatchingCompanies = state => {
  const currentUser = state.session.currentUser;
  const companies = state.entities.companies;
  let filteredWatchlist = [];
  currentUser.companies_watching.forEach((id) => {
    if (!currentUser.companies_invested.includes(id)) {
        filteredWatchlist.push(id);
      }
  });
  return filteredWatchlist.map((id) => companies[id]);
};

export const convertCompanySymToId = (companies, sym) => {
  companies = Object.values(companies);
  return companies.find(company => company.symbol === sym).id;
};

export const selectCurrentCompany = state => {
  const companyId = state.ui.companyDisplay;
  return state.entities.companies[companyId];
};

export const selectNewsArticles = state => {
  const newsArticles = state.entities.newsArticles;
  return Object.keys(newsArticles).map(id => newsArticles[id]);
};

export const selectSearchResults = state => {
  const companies = state.entities.companySearch;
  return Object.keys(companies).map(id => companies[id]);
};

export const getSymbols = state => {
  Object.keys(state.session.currentUser.stocks_by_sym || {});
};
