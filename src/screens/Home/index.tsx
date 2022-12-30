import { Input } from "../../components/Input";
import { ScrollView, Text, View } from "react-native";
import { Header } from "../../components/Header";
import { styles } from "./styles";
import { Tasks } from "../../components/Tasks";
import { useState } from "react";

export interface ITask {
  id: number;
  content: string;
  isCompleted: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: 1,
      content: "Trabalhar no Design System",
      isCompleted: false,
    },
    {
      id: 2,
      content: "Fazer deploy das aplicações",
      isCompleted: true,
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  function handleInputValue(inputValue: string) {
    const newValue = inputValue;

    setInputValue(newValue);
  }

  function handleAddNewTask() {
    const newTask = {
      id: new Date().getMilliseconds(),
      content: inputValue,
      isCompleted: false,
    };

    setTasks([newTask, ...tasks]);
    setInputValue("");
  }

  function handleRemoveTask(taskToDelete: number) {
    const newTasksWithoutOne = tasks.filter((task) => {
      return task.id !== taskToDelete;
    });

    setTasks(newTasksWithoutOne);
  }

  function handleTasksToCompleted(taskChecked: number) {
    const newTasksCompleted = tasks.map((task) => {
      if (task.id === taskChecked) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      } else {
        return task;
      }
    });

    setTasks(sortByIsCompleted(newTasksCompleted));
  }

  function sortByIsCompleted(newTasksArray: ITask[]) {
    const newTasksArraySorted = newTasksArray.sort((a, _) => {
      switch (a.isCompleted) {
        case false:
          return -1;
          break;
        case true:
          return 1;
          break;
        default:
          return 0;
          break;
      }
    });

    return newTasksArraySorted;
  }

  return (
    <View style={styles.homeContainer}>
      <Header />
      <Input
        inputValue={inputValue}
        onChangeText={handleInputValue}
        onNewTask={handleAddNewTask}
      />
      <ScrollView>
        <Tasks
          tasks={tasks}
          onTaskDelete={handleRemoveTask}
          onTaskCompleted={handleTasksToCompleted}
        />
      </ScrollView>
    </View>
  );
}
