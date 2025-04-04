import '@mantine/core/styles.css';
import { MantineProvider, Grid, Button } from '@mantine/core';
import { AssistantRuntimeProvider } from "@assistant-ui/react";
import { useChatRuntime } from "@assistant-ui/react-ai-sdk";
import { ThreadList } from "@/components/thread-list";
import { Thread } from "@/components/thread";
import { useState } from 'react';
 
const App = () => {
  const runtime = useChatRuntime({
    api: "/api/chat",
  });

  const [chatVisible, setChatVisible] = useState<boolean>(false);

  const toggleChat = () => {
    setChatVisible(!chatVisible);
  };

  return (
      <MantineProvider>
        {chatVisible ?
          <div>
            <h1>Dynamic Dashboard</h1> 
            <Button onClick={toggleChat}>Open</Button>
          </div>
        :
          <Grid> 
            <Grid.Col span={2}> 
              <h1>Dynamic Dashboard</h1> 
              <Button onClick={toggleChat}>Close</Button>
            </Grid.Col>
            <Grid.Col span={10}>
              <AssistantRuntimeProvider runtime={runtime}>
                <div className="grid h-dvh grid-cols-[200px_1fr] gap-x-2 px-4 py-4">
                  <ThreadList />
                  <Thread />
                </div>
              </AssistantRuntimeProvider>
            </Grid.Col>
        </Grid>
        }
    </MantineProvider>
  );
};

export default App
