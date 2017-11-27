export const selectInvestedCompanies = (state) => {
  const companies = state.entities.companies;
  const currentUser = state.session.currentUser;
  return currentUser.companies_invested.map((id) => companies[id]);
};

export const selectWatchingCompanies = (state) => {
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

export const selectCurrentCompany = (state, sym) => {
  let companies = state.entities.companies;
  companies = Object.values(companies);
  companies.find(company => company.symbol === sym);
};

export const selectNewsArticles = (state) => {
  const newsArticles = state.entities.newsArticles;
  return Object.keys(newsArticles).map((id) => newsArticles[id]);
};
