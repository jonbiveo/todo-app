import React, { useState } from 'react';


function Form({ inputText, setInputText, todos, setTodos }) {

const inputTextHandler = (e) => {
  console.log(e.target.value);
  setInputText(e.target.value);
};

const submitTodoHandler = (e) => {
  e.preventDefault();
  setTodos([...todos, {text: inputText, completed: false, id: Math.random()*1000}]);
  setInputText('');
}

  return (
    <div>
      <form>
        <label>
          Enter a task:
          <input value={inputText} onChange={inputTextHandler} type="text" />
        </label>
        <input onClick={submitTodoHandler} type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Form;  