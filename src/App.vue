<!-- <template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
 -->

 <template>
  <v-container>
    <AddTaskForm @add-task="handleAddTask" />
    <TaskList :tasks="tasks" @edit-task="handleEditTask" @delete-task="handleDeleteTask" />
  </v-container>
</template>

<script>
import { useWebSocket } from './useWebSocket';
import { mapState } from 'vuex';
import TaskList from './components/TaskList.vue';
import AddTaskForm from './components/AddTaskForm.vue';

export default {
  components: { TaskList, AddTaskForm },
  computed: {
    ...mapState(['tasks'])
  },
  created() {
    useWebSocket(); // Initialize WebSocket connection
    this.$store.dispatch('fetchTasks'); // Fetch initial tasks
  },
  methods: {
    handleAddTask(task) {
      this.$store.dispatch('addTask', task);
    },
    handleEditTask(task) {
      this.$store.dispatch('updateTask', task);
    },
    handleDeleteTask(taskId) {
      this.$store.dispatch('deleteTask', taskId);
    }
  }
};
</script>
