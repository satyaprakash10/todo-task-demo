<script setup lang="ts"></script>

<template>
  <div class="h-full">
    <div class="bg-indigo-500 w-full px-10 py-3">
      <ul class="flex items-center space-x-6 justify-center">
        <li>
          <router-link
            to="/"
            class="hover:text-gray-200 text-white font-medium text-base md:text-lg uppercase"
          >
            Home
          </router-link>
        </li>
        <li>
          <router-link
            to="/todo-list"
            class="hover:text-gray-200 text-white font-medium text-base md:text-lg uppercase"
          >
            Todo
          </router-link>
        </li>
      </ul>
    </div>
    <router-view class="mt-10 mx-auto w-full container" />
  </div>
</template>

<style scoped></style>
