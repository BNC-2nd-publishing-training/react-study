import styled from "@emotion/styled";
import TabItem from "./TabItem";
import { useState, useEffect } from "react";
import { TabProps } from "@/utils/interfaces/TabProps";
import TodoList from "../Todo/TodoList";
import UpCommingList from "../Todo/UpcomingList";

const TabList = (props: TabProps) => {
    const menu = ['All', 'In Review', 'In Progress', 'Approved'];
    const [selectTab, setSelectTab] = useState<number>(0);
    const [filteredTodos, setFilteredTodos] = useState<any[]>([]);
    const [upcomingTodos, setUpcomingTodos] = useState<any[]>([]);
    const [ countTask , setCountTask] = useState<number>(0);

    useEffect(() => {
        const storedTodos = localStorage.getItem('tasks');
        const todos = storedTodos ? JSON.parse(storedTodos) : [];
        
        const filterByStatus = (status: string) => {
            const statusLower = status.toLowerCase();
            if (statusLower === 'all') {
                return todos.filter((todo: any) => todo.status.toLowerCase() != 'waiting');
            }
            return todos.filter((todo: any) => todo.status.toLowerCase() === statusLower);
        };

        const selectedStatus = menu[selectTab];
        setFilteredTodos(filterByStatus(selectedStatus));
    }, [filteredTodos]);

    useEffect(() => {
        const storedTodos = localStorage.getItem('tasks');
        const todos = storedTodos ? JSON.parse(storedTodos) : [];
        
        const filterUpcoming = () => {
            return todos.filter((todo: any) => todo.status.toLowerCase() === 'waiting');
        };

        setUpcomingTodos(filterUpcoming());
    }, [upcomingTodos]);

    useEffect(() => {
        const storedTodos = localStorage.getItem('tasks');
        const todos = storedTodos ? JSON.parse(storedTodos) : [];
        
        setCountTask(todos.length);
    }, [filteredTodos, upcomingTodos]);

    return (
        <TabContainer>
            <TabBox>
                {menu.map((menuItem, index) => (
                    <TabItem 
                        text={menuItem} 
                        key={index}
                        isActive={index === selectTab}
                        onClick={() => setSelectTab(index)}
                        count={countTask}
                    />
                ))}
            </TabBox>
            <ScrollBox>
                <TodoList onClick={props.onClick} todos={filteredTodos}/>
                <UpCommingList onClick={props.onClick} todos={upcomingTodos}/>
            </ScrollBox>
        </TabContainer>
    );
};

const TabContainer = styled.div`
    height: calc(100% - 100px);
`;

const TabBox = styled.div`
    display: flex;
    padding: 0 15px;
`;

const ScrollBox = styled.div`
    overflow: scroll;
    display: flex;
    flex-direction: column;
    row-gap: 90px;
    height: calc(100% - 90px);
    padding: 40px 50px;
`;

export default TabList;