import { Text, View } from "react-native";
import { ITask } from "../../screens/Home";
import { Task } from "../Task";
import { TasksEmpty } from "../TasksEmpty";
import { styles } from "./styles";

interface TasksProps {
  tasks: ITask[];
  onTaskDelete: (taskId: number) => void;
  onTaskCompleted: (taskId: number) => void;
}

export function Tasks({ tasks, onTaskDelete, onTaskCompleted }: TasksProps) {
  const tasksLength = tasks.length;
  const tasksCheckedLength = tasks.filter((task) => task.isCompleted).length;

  return (
    <View style={styles.tasksContainer}>
      <View style={styles.tasksInfo}>
        <View style={styles.tasksCreated}>
          <Text style={styles.tasksCreatedText}>Criadas</Text>
          <View style={styles.tasksCreatedCount}>
            <Text style={styles.tasksCreatedCountText}>{tasksLength}</Text>
          </View>
        </View>
        <View style={styles.tasksCompleted}>
          <Text style={styles.tasksCompletedText}>Concluídas</Text>
          <View style={styles.tasksCompletedCount}>
            <Text style={styles.tasksCompletedCountText}>
              {tasksCheckedLength}
            </Text>
          </View>
        </View>
      </View>

      {tasks.length === 0 && <TasksEmpty />}

      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            id={task.id}
            content={task.content}
            isCompleted={task.isCompleted}
            onDelete={onTaskDelete}
            onCompleted={onTaskCompleted}
          />
        );
      })}
    </View>
  );
}
