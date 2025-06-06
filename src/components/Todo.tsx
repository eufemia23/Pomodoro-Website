import { HiArrowTurnDownLeft } from "react-icons/hi2";
import { FaCheck } from "react-icons/fa6";
import { HiOutlineTrash } from "react-icons/hi2";
import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const [doneTodos, setDoneTodos] = useState<any>([]);

  const handleRemove = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleRemoveDone = (index: number) => {
    setDoneTodos(doneTodos.filter((_, i) => i !== index));
  };

  const handleDone = (todo: string, index: number) => {
    handleRemove(index);
    const newDoneTodos = [...doneTodos, todo];
    setDoneTodos(newDoneTodos);
  };

  const handleUndo = (doneTodo, index) => {
    setTodos([...todos, doneTodo]);
    handleRemoveDone(index);
  };

  return (
    <>
      <h2 className="text-primary-pink text-3xl font-cursive absolute left-232 w-100 top-34">Todo List</h2>
      <div className="flex bg-[url(img/diary.PNG)] w-260 bg-contain h-130 mr-[30px] font-bubbly text-[14px]">
        <div className="w-130 pl-11 py-10">
          <div className="">
            <h2 className="mx-auto w-max text-2xl font-bold mb-3">Add Todo</h2>

            <div className="w-max mx-auto">
              <form onSubmit={handleSubmit}>
                <input
                  value={inputValue}
                  onChange={handleChange}
                  type="text"
                  placeholder="Start writing and press enter to create task"
                  className="border-4 rounded-md border-primary-pink w-100 py-1 pl-2 outline-0 bg-light-pink pr-12 shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-white"
                />
                <button
                  type="submit"
                  className="shadow-[0px_2px_3px_rgba(132,88,68,0.5)] bg-primary-white border-0 hover:cursor-pointer hover:bg-light-white active:shadow-none active:top-[265px] absolute left-227 top-66 rounded-sm duration-100 ease-linear inset-shadow-sm inset-shadow-white"
                >
                  <HiArrowTurnDownLeft className="size-7 h-5 w-8" />
                </button>
              </form>
            </div>

            {todos.map((todo, index) => (
              <div key={index} className="ml-10 mt-4">
                <div className="flex w-92">
                  <button
                    className="border-2 rounded-md mr-3 text-primary-white border-light-brown hover:text-light-brown hover:cursor-pointer duration-100 ease-linear pl-[1.5px] pr-[1px] h-5 active:bg-accent-green active:text-light-brown"
                    onClick={() => handleDone(todo, index)}
                  >
                    <FaCheck className="" />
                  </button>

                  <div className="pt-[1px]">{todo}</div>

                  <button
                    key={index}
                    className="absolute left-231"
                    onClick={() => handleRemove(index)}
                  >
                    <HiOutlineTrash className="size-5 hover:size-6 duration-100 ease-linear hover:cursor-pointer active:text-primary-pink active:size-6" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-125 px-8 py-10">
          <div>
            <h2 className="mx-auto w-max text-2xl font-bold mb-3">
              Done Todos
            </h2>
          </div>

          <div>
            {doneTodos.map((doneTodo: any, index: number) => {
              return (
                <div className="ml-4 mt-4" key={index}>
                  <div className="flex w-92">
                    <button
                      onClick={() => handleUndo(doneTodo, index)}
                      className="border-2 rounded-md mr-3 text-accent-dark-green hover:cursor-pointer duration-100 ease-linear pl-[1.5px] pr-[1px] h-5 hover:text-primary-pink hover:border-accent-dark-green active:text-primary-white active:border-accent-dark-green"
                    >
                      <FaCheck className="" />
                    </button>

                    <div key={index} className="pt-[1px] text-accent-dark-green">
                      {doneTodo}
                    </div>

                    <button
                      key={index}
                      className="absolute left-350"
                      onClick={() => handleRemoveDone(index)}
                    >
                      <HiOutlineTrash className="size-5 hover:size-6 duration-100 ease-linear hover:cursor-pointer text-accent-dark-green active:text-primary-pink active:size-6" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
