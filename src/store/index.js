/*import { createStore } from "vuex";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
*/
import { createStore } from "vuex";

export default createStore({
  state: {
    tasks: []
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    addTask(state, task) {
      state.tasks.push(task);
    },
    updateTask(state, updatedTask) {
      const index = state.tasks.findIndex(task => task.id === updatedTask.id);
      if (index !== -1) state.tasks[index] = updatedTask;
    },
    deleteTask(state, taskId) {
      state.tasks = state.tasks.filter(task => task.id !== taskId);
    }
  },
  actions: {
    fetchTasks({ commit }) {
      // Later, we’ll add an API call here to get tasks
    },
    addTask({ commit }, task) {
      // Later, we’ll add an API call to add a task
    },
    updateTask({ commit }, updatedTask) {
      // Later, we’ll add an API call to update a task
    },
    deleteTask({ commit }, taskId) {
      // Later, we’ll add an API call to delete a task
    }
  }
});
