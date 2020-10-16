import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import MusicList2 from "./MusicList2";
import MovieList2 from "./MovieList2";
import About from "./About";

function App() {
  return (
    <>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/music">Music</Link></li>
      <li><Link to="/movie">Movie</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
    <hr />
    <Switch>
      <Route path="/" component={Home} exact></Route>
      <Route path="/music" component={MusicList2}></Route>
      <Route path="/movie" component={MovieList2}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/"><p>404 Not Found</p></Route>
    </Switch>

    {/* <Route path="/" component={Home} exact></Route> */}

    {/* <Switch>
      <Route path="/music" component={MusicList2}></Route>
      <Route path="/movie" component={MovieList2}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/" component={Home} ></Route>
    </Switch> */}
    </>
  );
}

export default App;
