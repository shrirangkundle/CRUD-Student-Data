import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "../src/pages/welcomePage";
import CreateStudent from "../src/pages/createStudent";
import StudentList from "../src/pages/studentList";
import StudentDetails from "../src/pages/individualStudent";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/createStudent" component={CreateStudent} />
        <Route exact path="/studentList" component={StudentList} />
        <Route exact path="/studentDetails" component={StudentDetails} />
      </Switch>
    </Router>
  );
}

export default App;
