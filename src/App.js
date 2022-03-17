import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import store from "./redux/store";
import Main from "./pages/Main";
import Header from "./components/header";
import Section from "./components/section";
import Footer from "./components/footer";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
          <Header/>
          <Section/>

        <Routes>
          <Route path="/" element={<Navigate to={"/category/uzbekistan"} />} />
          <Route path="/category/:category" element={<Main />} />
          <Route path="/category/:category/:id" element={<Main />} />
        </Routes>
          <Footer/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
