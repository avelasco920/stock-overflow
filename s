// api util
export const searchMusicDatabase = (query) => {
  return $.ajax({
    method: 'GET',
    url: 'api/music_searches',
    data: { search: { query: query } }
  });
}

// actions
const receiveSearchResults = (searchResults) => ({
  type: RECEIVE_SEARCH_RESULTS,
  searhResults
});

export const searchDatabase = (query) => (dispatch) => (
  searchMusicDatabase(query).then(
    (results) => dispatch(receiveSearchResults(results))
  )
);

// reducer
export const SearchReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return action.searchResults;
    default:
    return state;
  }
}
