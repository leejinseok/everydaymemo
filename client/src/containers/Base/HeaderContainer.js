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

    handleProfileClick = (e) => {
        alert('hi');
        // this.setState({
        //     menu: true
        // });
    }
    
    render () {
        const { menu } = this.state;
        const { handleProfileClick } = this;
        const { user } = this.props;
        return (
            <Header user={user} menu={menu} onClick={handleProfileClick}/>
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

