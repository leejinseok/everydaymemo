import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HeaderContainer from './containers/Base/HeaderContainer';
import { Welcome } from './pages';
import styled from 'styled-components';

class App extends Component {
    render() {
        return (
            <div>
                <HeaderContainer />
                <Route exact path="/" component={Welcome} />
            </div>
        );
    }
}

export default App;
