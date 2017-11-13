import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from 'redux/modules/user';
import { toJS } from 'immutable';
import Header from 'components/Base/Header';

class HeaderContainer extends Component {

    componentWillMount = async () => {
        const { UserActions } = this.props;
        try {
            await UserActions.checkLoginStatus();   
        } catch (e) {
            console.log(e);
        }
    }
    
    render () {
        const { user } = this.props;
        return (
            <Header user={user}/>
        )
    }
};

export default connect(
    (state) => ({
        user: state.user.get('user')
    }),
    (dispatch) => ({
        UserActions: bindActionCreators(userActions, dispatch)
    })
)(HeaderContainer);

