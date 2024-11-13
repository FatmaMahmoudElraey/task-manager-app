import { io } from 'socket.io-client';
import { useStore } from 'vuex';

const socket = io('http://localhost:3000'); // Replace with your WebSocket server URL

export function useWebSocket() {
  const store = useStore();

  socket.on('taskAdded', (task) => {
    store.commit('addTask', task);
  });

  socket.on('taskUpdated', (task) => {
    store.commit('updateTask', task);
  });

  socket.on('taskDeleted', (taskId) => {
    store.commit('deleteTask', taskId);
  });

  return socket;
}
