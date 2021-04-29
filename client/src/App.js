import { Redirect, Route, Switch } from "react-router-dom";

import Container from "./components/Container";
import Navbar from "./components/Navbar";
import News from "./pages/NewsPage";
import MainPage from "./pages/MainPage";

const App = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Switch>
          <Route path="/" component={MainPage} exact />
          <Route path="/news/:newsId" exact component={News} />
          <Redirect to="/" />
        </Switch>
      </Container>
    </>
  );
};

export default App;
