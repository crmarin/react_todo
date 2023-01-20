import React from "react";

function Form({ inputText, setInputText, setTodos, todos ,setStatus}) {
  const clickHandler = (e) => {
    e.preventDefault();
    setTodos([
      {
        text: inputText,
        completed: false,
        id: Math.ceil(Math.random() * 1000),
      },
      ...todos,
    ]);
    setInputText("");
  };
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const statusHandler = (e) => {
    setStatus(e.target.value)
  }
  return (
    <div className="flex flex-col justify-center w-full mb-6 pb-6 border-b-2 border-gray-100 items-center bg-white  mx-auto ">
      <form className="flex  rounded-2xl border-gray-100 border-2 ml-4 mr-4">
        <input
          className="w-full box-border outline-none bg-transparent text-gray-600 placeholder-gray-300 text-2xl mx-6 p-2"
          placeholder="New"
          onChange={inputTextHandler}
          value={inputText}
          type="text"
        />
        <button onClick={clickHandler} className="outline-none">
          <i className="fas fa-thumbtack text-blue-500 mr-4 text-lg outline-none outline-no"></i>
        </button>
      </form>
      <div className="flex justify-evenly mt-6 w-full header-font text-gray-500">
          <button onClick={statusHandler} value="all" className="">all</button>
          <button onClick={statusHandler} value="done" className="">done</button>
          <button onClick={statusHandler} value="waiting" className="">waiting</button>
      </div>
    </div>
  );
}

export default Form;
