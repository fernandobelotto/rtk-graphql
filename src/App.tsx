import { useRef } from "react";
import { useLazyGetUserByLoginQuery } from "./api";
import NewRepository from "./examples/NewRepository";
import Repositories from "./examples/Repositories";
import SingleRepository from "./examples/SingleRepository";

export default function App() {
  return (
    <>
      <h1>Redux Toolkit + GraphQl</h1>

      <div style={{ display: "flex", gap: "10px", flexWrap: 'wrap' }}>
        <div className="border">
          <h2>First example - lazy query</h2>
          <SingleRepository />
        </div>

        <div className="border">
          <h2>Second example - non lazy query</h2>
          <Repositories />
        </div>

        <div className="border">
          <h2>Third example - mutation</h2>
          <NewRepository />
        </div>
      </div>
    </>
  );
}
