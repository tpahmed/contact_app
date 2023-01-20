import Contact_holder from "./Component/Contact_holder";
import Add_holder from "./Component/Add_holder";
import View_holder from "./Component/View_holder";
import { Route,Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css"

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route index element={<Contact_holder/>} />
          <Route path="add" element={<Add_holder/>} />
          <Route path="view" element={<View_holder/>} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
