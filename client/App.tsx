import { socket, socketContext } from "./src/Services/Context/Socket/Socket";
import Router from "./src/Router/Router";

function App() {
  return <socketContext.Provider value={socket}>
    <Router />
  </socketContext.Provider>
}

export default App;