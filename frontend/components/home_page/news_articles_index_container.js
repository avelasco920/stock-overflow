import { connect } from 'react-redux';
import { fetchNewsArticles } from '../../actions/news_articles_actions';
import { selectNewsArticles } from '../../reducers/selectors';
import NewsArticlesIndex from './news_articles_index';

const mapStateToProps = state => {
  return {
    newsArticles: selectNewsArticles(state),
    loading: state.ui.loading.articlesLoading,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchNewsArticles: () => dispatch(fetchNewsArticles()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsArticlesIndex);
