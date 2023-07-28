import { useState } from "react";

const App: React.FC = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "제목",
      body: "내용",
      isDone: false,
    },
    {
      id: 2,
      title: "제목2",
      body: "내용2",
      isDone: true,
    },
    {
      id: 3,
      title: "제목3",
      body: "내용3",
      isDone: false,
    },
  ]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const inputTitle = (e: any) => {
    setTitle(e.target.value);
  };
  const inputBody = (e: any) => {
    setBody(e.target.value);
  };

  const removeTodo = (todo: any) => {
    setTodos(
      todos.filter((item) => {
        return todo.id !== item.id;
      })
    );
  };
  const switchTodo = (todo: any) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...todo, isDone: !todo.isDone };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <>
      <div>
        <main>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const newTodo = {
                id: 1,
                title,
                body,
                isDone: false,
              };
              setTodos([...todos, newTodo]);
            }}
          >
            <input type="text" value={title} onChange={inputTitle} />
            <input type="text" value={body} onChange={inputBody} />
            <button>추가</button>
          </form>
          <div>
            <h1>할일</h1>
            {todos
              .filter((item) => {
                return item.isDone === false;
              })
              .map((todo) => {
                return (
                  <div key={todo.id}>
                    <div>{todo.id}</div>
                    <div>{todo.title}</div>
                    <div>{todo.body}</div>
                    <div>{todo.isDone}</div>
                    <button onClick={() => removeTodo(todo)}>삭제</button>
                    <button onClick={() => switchTodo(todo)}>완료</button>
                  </div>
                );
              })}
          </div>
          <div>
            <h1>한일</h1>
            {todos
              .filter((item) => {
                return item.isDone === true;
              })
              .map((todo) => {
                return (
                  <div key={todo.id}>
                    <div>{todo.id}</div>
                    <div>{todo.title}</div>
                    <div>{todo.body}</div>
                    <div>{todo.isDone}</div>
                    <button onClick={() => removeTodo(todo)}>삭제</button>
                    <button onClick={() => switchTodo(todo)}>완료</button>
                  </div>
                );
              })}
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
