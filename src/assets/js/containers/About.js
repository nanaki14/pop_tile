import { connect } from 'react-redux';
import About from '../components/about/About';

import { loaded } from '../actions/';

const mapStateToProps = (state, props) => ({
  loaded: state.loaded
});

const mapDispatchToProps = dispatch => ({
  onLoaded: () => dispatch(loaded()),
});

export default connect(mapStateToProps, mapDispatchToProps)(About);
