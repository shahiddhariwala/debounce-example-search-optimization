import "./styles.css";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

const InputText = styled.input`
  height: 20px;
  width: 100%;
`;
export default function App() {
  const [searchVal, setSearchVal] = useState("");

  const onChangeHandler = (event) => {
    setSearchVal(event.target.value);
  };
  return (
    <div className="App">
      <label>Search Box</label>
      <InputText onChange={onChangeHandler} value={searchVal} />
      <p>
        <span>Searched : </span>
        {searchVal}
      </p>
    </div>
  );
}
