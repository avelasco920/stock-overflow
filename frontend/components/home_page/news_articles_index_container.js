import { connect } from 'react-redux';
import {
  fetchNewsArticles,
  incrementCount
} from '../../actions/news_articles_actions';
import { selectNewsArticles } from '../../reducers/selectors';
import NewsArticlesIndex from './news_articles_index';

const mapStateToProps = state => {
  return {
    newsArticles: selectNewsArticles(state),
    loading: state.ui.loading.articlesLoading,
    companiesLoading: state.ui.loading.indexLoading,
    companies: state.entities.companies,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchNewsArticles: () => dispatch(fetchNewsArticles()),
  incrementCount: (id) => dispatch(incrementCount(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsArticlesIndex);
