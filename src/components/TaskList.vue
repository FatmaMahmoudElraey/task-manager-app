<template>
    <v-list>
      <v-list-item v-for="task in tasks" :key="task.id">
        <v-list-item-content>
          <v-list-item-title>{{ task.title }}</v-list-item-title>
          <v-list-item-subtitle>Due: {{ task.dueDate }}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn @click="editTask(task)">Edit</v-btn>
          <v-btn @click="deleteTask(task.id)">Delete</v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </template>
  
  <script>
  export default {
    props: ['tasks'],
    methods: {
      editTask(task) {
        this.$emit('edit-task', task);
      },
      deleteTask(taskId) {
        this.$emit('delete-task', taskId);
      }
    }
  }
  </script>
  