import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    const { testState } = state.ui;

    return {
        testState
    };
};

@connect(mapStateToProps)
export default class App extends React.Component {
    static propTypes = {
        testState: PropTypes.string.isRequired
    }

    render() {
        return <div>React Application</div>;
    }
}
