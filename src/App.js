import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import SearchPage from './SearchPage';
import firebase from "./firebase"
import RecommendedVideos from './RecommendedVideos';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (


    <div className="App">

      <Router>
      <Header />
        <Switch>

          <Route path="/search">
            <h4>search page</h4>
            <div className="app_page">
              <Sidebar></Sidebar>
             <SearchPage/>
            </div>
          </Route>

          <Route path="/">
            <div className="app_page">
              <Sidebar></Sidebar>
              <RecommendedVideos></RecommendedVideos>
            </div>
          </Route>

        </Switch>

      </Router>



    </div>



  );
}

export default App;
