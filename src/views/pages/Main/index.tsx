import TodoList from "@/components/pages/todoList";
import * as _ from "./style";
import CreateTaskButton from "@/components/common/createTaskButton";
import { useState } from "react";
import { Todo as ITodo } from "@/components/common/todoitem/type";
import { TodoStatusType } from "@/components/pages/todoList/type";
import TodoUpcomingList from "@/components/pages/todoUpcomingList";

const Main = () => {
  const [todo, setTodo] = useState<ITodo[]>([
    {
      id: 1,
      text: "dsaqs",
      completed: true,
      status: "In progress",
    },
    {
      id: 1,
      text: "dsaqs",
      completed: true,
      status: "In progress",
    },
  ]);
  const [upcomingTodo, setUpComingTodo] = useState<ITodo[]>([
    {
      id: 2,
      text: "dsfdghffds",
      completed: false,
      status: "Waiting",
    },
  ]);
  const [nowNav, setNowNav] = useState<TodoStatusType>("All");

  return (
    <_.Container>
      <_.MainContainer>
        <_.Header>
          <p>Today Task</p>
          <CreateTaskButton />
        </_.Header>
        <TodoList todoList={todo} setTodoList={setTodo} nowNav={nowNav} />
        <TodoUpcomingList
          todoList={upcomingTodo}
          setTodoList={setUpComingTodo}
        />
      </_.MainContainer>
    </_.Container>
  );
};

export default Main;
