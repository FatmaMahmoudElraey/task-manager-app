<template>
    <v-form>
      <v-text-field v-model="title" label="Task Title" />
      <v-date-picker v-model="dueDate" label="Due Date" />
      <v-btn @click="addTask">Add Task</v-btn>
    </v-form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: '',
        dueDate: ''
      };
    },
    methods: {
      addTask() {
        const newTask = { title: this.title, dueDate: this.dueDate, completed: false };
        this.$emit('add-task', newTask);
      }
    }
  }
  </script>
  