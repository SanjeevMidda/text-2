import "./index.css";
import Info from "./components/Info";
import Year from "./components/Year";

function App() {
  return (
    <div className="App">
      <h1>
        Lorem ipsum <span onClick={() => <Info />}>dolor</span> sit amet
        consectetur <span>adipisicing</span> elit. Ut animi itaque aut provident
        repellendus nesciunt <span>architecto?</span> Dolorem laborum{" "}
        <span>aliquam</span>
        similique totam! Rerum distinctio neque <span>consequatur</span> nostrum
        spanquibusdam <span>voluptate</span> unde?
      </h1>
    </div>
  );
}

export default App;
