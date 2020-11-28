import React from 'react';
import './App.css';
import IntroPage from "./components/IntroPage/IntroPage";
import AccountPage from "./components/AccountPage/AccountPage";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";
import Header from "./components/Header/Header";
import CreateTender from "./components/CreateTender/CreateTender";
import StrangerTender, {ReplyToTender} from "./components/Tender/StrangerTender";
import {BrowserRouter, Route} from 'react-router-dom';
import MyTender from "./components/MyTender/MyTender";
import Auth from "./components/Auth/Auth";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header/>
        <div className="content">
          <Route exact path={"/"} component={IntroPage}/>
          <Route path={"/auth"} component={Auth}/>
          <Route path={"/home"} component={HomePage}/>
          <Route path={"/account"} component={AccountPage}/>
          <Route path={"/create_tender"} component={CreateTender}/>
          <Route path={"/my_tenders"} component={MyTender}/>
          <Route path={"/reply_to_tender"} component={ReplyToTender}/>
          <Route path={"/stranger_tender"} component={StrangerTender}/>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
