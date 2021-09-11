import "./styles.css";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

const InputText = styled.input`
  height: 20px;
  width: 100%;
`;

const debounce = (func, timeout = 1000) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};
export default function App() {
  const [searchVal, setSearchVal] = useState("");
  const [inputValue, setInputValue] = useState("");

  const addDebouncedSearchVal = debounce(setSearchVal);

  const onChangeHandler = (event) => {
    let val = event.target.value;
    setInputValue(val);
    addDebouncedSearchVal(val);
  };
  return (
    <div className="App">
      <label>Search Box</label>
      <InputText onChange={onChangeHandler} value={inputValue} />
      <p>
        <span>Searched : </span>
        {searchVal}
      </p>
    </div>
  );
}
