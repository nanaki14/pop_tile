import { connect } from 'react-redux';
import ColorBlock from '../components/colorBlock/ColorBlock';

import { loaded } from '../actions/';

const mapStateToProps = (state, props) => ({
  loaded: state.loaded
});

const mapDispatchToProps = dispatch => ({
  onLoaded: () => dispatch(loaded()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorBlock);
