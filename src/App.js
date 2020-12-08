import logo from "./logo.svg";
import "./App.css";
import ListItem from "./components/ListItem";

function App() {
  let list = ["Buy a standup desk", "Get a job", "Redo resume, again"];
  let listItems = list.map((toDo, index) => {
    return <ListItem doThis={toDo} key={index} />;
  });
  return (
    <div className="App-header">
      <header >
        My List
        <div>
          <ul>
            <ListItem doThis="Make the list" />
            <ListItem doThis="Finish the deliverable" />
            <ListItem doThis="Clean the bathroom" />
            <ListItem doThis="Turn in your resume" />
            {listItems}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
