import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HeaderContainer from './containers/Base/HeaderContainer';
import { Welcome, Signup, Home } from './pages';
import styled from 'styled-components';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <HeaderContainer />
                <Route exact path="/" component={Welcome} />
                <Route path="/signup" component={Signup} />
                <Route path="/home" component={Home} />
            </div>
        );
    }
}

export default App;
