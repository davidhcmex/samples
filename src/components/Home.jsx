import { Tabs } from "@chakra-ui/react"
import { LuTable, LuTable2, LuTableProperties } from "react-icons/lu"
import { CustomTable } from "./CustomTable"
import { ToDoTable } from "./ToDoTable"
import { TodoTableWithActions } from "./ToDoTableWithActions"


export const Home = () => {
    return (
        <Tabs.Root defaultValue="table">
            <Tabs.List>
                <Tabs.Trigger value="table" bg="primary.100">
                    <LuTableProperties />
                    Formatted Table
                </Tabs.Trigger>
                <Tabs.Trigger value="todo" bg="primary.100">
                    <LuTable />
                    To Do
                </Tabs.Trigger>
                <Tabs.Trigger value="todo_with_actions" bg="primary.100">
                    <LuTable2 />
                    To Do With  Actions
                </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="table"> <CustomTable /></Tabs.Content>
            <Tabs.Content value="todo"><ToDoTable /></Tabs.Content>
            <Tabs.Content value="todo_with_actions"><TodoTableWithActions /></Tabs.Content>
        </Tabs.Root>
    )
}

