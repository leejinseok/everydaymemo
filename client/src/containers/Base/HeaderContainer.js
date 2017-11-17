import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from 'redux/modules/user';
import { toJS } from 'immutable';
import Header from 'components/Base/Header';

class HeaderContainer extends Component {

    state = {
        menu: false
    }

    componentWillMount = async () => {
        const { UserActions } = this.props;
        try {
            await UserActions.checkLoginStatus();   
        } catch (e) {
            console.log(e);
        }
    }

    handleProfileClick = () => {
        this.setState({
            menu: !this.state.menu
        });
    }

    handleLogout = async () => {
        const { UserActions, history } = this.props;
        try {
            await UserActions.logout();
        } catch (e) {
            console.log(e);
        }
        window.location.href = '/';
    }
    
    render () {
        const { menu } = this.state;
        const { handleProfileClick, handleLogout } = this;
        const { user } = this.props;
        return (
            <Header user={user} menu={menu} 
                handleProfileClick={handleProfileClick}
                handleLogout={handleLogout}
            />
        );
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

