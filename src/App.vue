<script setup lang="ts">
import ChatToolbar from './components/ChatToolbar.vue';
import ChatWindow from './components/ChatWindow.vue';
import ChatInput from './components/ChatInput.vue';
import { ref } from 'vue';
import { IMessage } from './interfaces';

const messages = ref<IMessage[]>([])
</script>

<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <ChatToolbar />
    <ChatWindow :messages="messages" />
    <ChatInput />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
