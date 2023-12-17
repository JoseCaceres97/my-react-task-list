import { ChakraProvider, Input, Button, IconButton, VStack, Center, Text, ColorModeScript, useColorMode} from '@chakra-ui/react';
import React from 'react';
import './App.css';
import TaskList from './componentes/TaskList';
import Title from './componentes/Header';
import UseTaskManager from './hooks/Hook1';
import theme from './theme';

const App = () => {
  const {
    tasks,
    newTask,
    setNewTask,
    addTask,
    editTask,
    deleteTask,
  } = UseTaskManager();

  const handleTaskSubmission = (event) => {
    event.preventDefault();
    addTask();
  };

  return ( 
     
      <Center w="1300px"  h='800'>
      <VStack spacing={6} w="600px">    
          <Title />
          <form onSubmit={handleTaskSubmission}>
            <VStack spacing={2} w="100%">
              <Input
                variant='filled'
                placeholder="New task"
                value={newTask.name}
                onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
              />
              <Button colorScheme='blue' type="submit" leftIcon="Add">
              </Button>
            </VStack>
          </form>
          <VStack spacing={6} w="600px" mt={8}>
            <TaskList tasks={tasks} editTask={editTask} deleteTask={deleteTask} />
          </VStack>
        </VStack>
      </Center>
     
  );
};

export default App;