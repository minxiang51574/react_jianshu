import React, { Component } from 'react';
import { GlobalStyle } from './style.js';
import { GlobalIconStyle }from './statics/iconfont/iconfont.js';
import { BrowserRouter , Route } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store"



import Header from "./common/header"
import Home from "./pages/home"
import Detail from './pages/detail';
import Login from "./pages/login"
import Write from "./pages/write"

class App extends Component {
    render(){
        return (
            <Provider store={store}>
                <div>
                    <GlobalStyle />
                    <GlobalIconStyle />
                    <BrowserRouter>
                       <div>
                        <Header />
                           <Route path='/' exact component={Home}></Route>
                           <Route path="/detail/:id" exact component={Detail}> </Route>
                           <Route path='/write' exact component={Write}></Route>
                           <Route path="/login" exact component={Login} ></Route>
                       </div>
                    </BrowserRouter>
                 </div>
            </Provider>
        )
    }
}
export default App;
