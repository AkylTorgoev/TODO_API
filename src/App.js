import Header from "./Components/Navbar/Header";
import TodoContextProvider from "./Context/TodoContext";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <>
    <TodoContextProvider>
      <Header />
      <MainRoutes />
    </TodoContextProvider>
    </>
  );
}

export default App;
