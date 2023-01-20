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
    <div className="mx-auto mb-6 flex w-full flex-col items-center justify-center border-b-2 border-gray-100 bg-white  pb-6 ">
      <form className="ml-4  mr-4 flex rounded-2xl border-2 border-gray-100">
        <input
          className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-gray-600 placeholder-gray-300 shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
          placeholder="New"
          onChange={inputTextHandler}
          value={inputText}
          type="text"
        />
        <button
          onClick={clickHandler}
          className="mx-2 rounded bg-indigo-500 px-4 py-2 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none active:bg-indigo-600"
        >
          <i className="fas fa-save outline-no text-lg text-white outline-none"></i>
        </button>
      </form>
      <div className="header-font mt-6 flex w-full justify-evenly text-gray-500">
        <button onClick={statusHandler} value="all" className="mr-1 rounded bg-blue-500 px-4 py-2 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none active:bg-blue-600">
          all
        </button>
        <button onClick={statusHandler} value="done" className="mr-1 rounded bg-green-500 px-4 py-2 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none active:bg-green-600">
          done
        </button>
        <button onClick={statusHandler} value="waiting" className="mr-1 rounded bg-red-500 px-4 py-2 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none active:bg-red-600">
          waiting
        </button>
      </div>
    </div>
  );
}

export default Form;
