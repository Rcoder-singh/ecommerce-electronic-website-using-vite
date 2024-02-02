import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Feature from "./Components/Feature";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Navbar />
        <Hero />
        <Feature />
      </Provider>
    </div>
  );
};

export default App;
