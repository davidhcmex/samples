import { Tabs } from "@chakra-ui/react"
import { LuFolder, LuSquareCheck, LuUser } from "react-icons/lu"
import { CustomTable } from "./CustomTable"
import { ToDoTable } from "./ToDoTable"


export const Home = () => {
    return (
        <Tabs.Root defaultValue="table">
            <Tabs.List>
                <Tabs.Trigger value="table" bg="primary">
                    <LuUser />
                    Table
                </Tabs.Trigger>
                <Tabs.Trigger value="todo" bg="secondary">
                    <LuFolder />
                    To Do
                </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="table"> <CustomTable /></Tabs.Content>
            <Tabs.Content value="todo"><ToDoTable /></Tabs.Content>
        </Tabs.Root>
    )
}

