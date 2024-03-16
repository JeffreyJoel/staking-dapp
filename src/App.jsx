// import { useState } from "react";
import Header from "./component/Header";
import "@radix-ui/themes/styles.css";
import { configureWeb3Modal } from "./connection";
import usePools from "./hooks/getPools";
configureWeb3Modal();

function App() {
  usePools()
  return (
    <>
      
      <div className="container">
      <Header />

      <div>
        <button>Stake</button>
      </div>
      </div>
    </>
  );
}

export default App;
