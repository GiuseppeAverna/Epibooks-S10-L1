import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
// import AllTheBooks from './components/AllTheBooks'
import { Container } from "react-bootstrap";
import BookList from "./components/BookList";
import { Component } from "react";

import fantasy from "./data/fantasy.json";

class App extends Component() {
  state = {};
  render() {
    return (
      <>
        <MyNav />
        <Container>
          <Welcome />
          {/* <AllTheBooks /> */}
          <BookList books={fantasy} />
        </Container>
        <MyFooter />
      </>
    );
  }
}

export default App;
