import BadgeButtonGroup from "@/components/Buttons/BadgeButtonGroup";
import TodayTasksSection from "@/components/Buttons/AddButtonGroup";
import CreateTaskModal from "@/components/Modal/CreateTaskModal";
import EditTaskModal from "@/components/Modal/EditTaskModal";
import TaskList from "@/components/TaskList/OtherTaskList";
import UpcomingTaskList from "@/components/TaskList/UpcomingTaskList";
import { Task } from "@/utils/interfaces/Task";
import {
  handleButtonClick,
  filterTasks,
} from "@/utils/functions/taskFunctions";
import {
  closeCreateModal,
  closeEditModal,
} from "@/utils/functions/modalFunctions";
import { TodoContentProps } from "@/utils/interfaces/todoContentProps";

const TodoContentTaskList: React.FC<TodoContentProps> = ({
  tasks,
  setTasks,
  setSelectedTask,
  setIsEditModalOpen,
  isCreateModalOpen,
  setIsCreateModalOpen,
  isEditModalOpen,
  selectedTask,
  selectedTag,
  setSelectedTag,
  nextId,
  setNextId,
}) => {
  const filteredTasks = filterTasks(tasks, selectedTag);
  const totalTasksCount = filteredTasks.length;

  return (
    <>
      <BadgeButtonGroup
        totalTasksCount={totalTasksCount}
        selectedTag={selectedTag}
        onButtonClick={(tag) => handleButtonClick(tag, setSelectedTag)}
      />
      <TodayTasksSection onAddButtonClick={() => setIsCreateModalOpen(true)} />
      {isCreateModalOpen && (
        <CreateTaskModal
          onClose={(task: Task) =>
            closeCreateModal(
              task,
              setTasks,
              nextId,
              setNextId,
              setIsCreateModalOpen
            )
          }
        />
      )}
      {isEditModalOpen && selectedTask && (
        <EditTaskModal
          onClose={(updatedTask: Task) =>
            closeEditModal(
              updatedTask,
              setTasks,
              setIsEditModalOpen,
              setSelectedTask
            )
          }
          initialTask={selectedTask}
        />
      )}
      <TaskList
        tasks={filteredTasks}
        setTasks={setTasks}
        setSelectedTask={setSelectedTask}
        setIsEditModalOpen={setIsEditModalOpen}
      />
      <UpcomingTaskList
        tasks={tasks}
        setTasks={setTasks}
        setSelectedTask={setSelectedTask}
        setIsEditModalOpen={setIsEditModalOpen}
      />
    </>
  );
};

export default TodoContentTaskList;
