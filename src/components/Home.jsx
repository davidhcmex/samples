import { Tabs } from "@chakra-ui/react"
import { LuFolder, LuSquareCheck, LuUser } from "react-icons/lu"


export const Home = () => {
  return (
    <Tabs.Root defaultValue="code">
      <Tabs.List>
        <Tabs.Trigger value="code">
          <LuUser />
          Code
        </Tabs.Trigger>
        <Tabs.Trigger value="render">
          <LuFolder />
          Render
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="code">Code</Tabs.Content>
      <Tabs.Content value="render">Render</Tabs.Content>
    </Tabs.Root>
  )
}

