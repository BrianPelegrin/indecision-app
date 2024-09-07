<script setup lang="ts">
import { reactive } from 'vue';
import { IAppConfig } from '../interfaces';
defineEmits<{ 
    (event:'submit-appearance', args:IAppConfig):void 
    (event:'cancel'):void 
}>()

const appearance = reactive<IAppConfig>({
  appColor:'#3fb884',
  messageColor:'#82e0b5',
  contactMessageColor:'#D1D5DB'
})
</script>
<template>
    <form @submit.prevent="$emit('submit-appearance', appearance)">
        <div class="block w-full mb-2">
            <label class="block  text-sm font-medium text-gray-900 dark:text-gray-300" for="input-color">Color de la aplicacion:</label>
            <input
              v-model="appearance.appColor" 
              type="color" 
              id="input-group-1" 
              class="bg-gray-50   text-gray-900  rounded-lg pa-0 w-full"          
            />
        </div>
        <div class="block w-full mb-2">
            <label class="block  text-sm font-medium text-gray-900 dark:text-gray-300" for="input-color">Color de tus mensajes:</label>
            <input
              v-model="appearance.messageColor" 
              type="color" 
              id="input-group-1" 
              class="bg-gray-50   text-gray-900  rounded-lg pa-0 w-full"          
            />
        </div>
        <div class="block w-full mb-2">
            <label class="block  text-sm font-medium text-gray-900 dark:text-gray-300" for="input-color">Color los mensajes recibidos:</label>
            <input
              v-model="appearance.contactMessageColor" 
              type="color" 
              id="input-group-1" 
              class="bg-gray-50   text-gray-900  rounded-lg pa-0 w-full"          
            />
        </div>
        <div class="block w-full space-x-4">
            <button @click="$emit('cancel')" type="button" class="font-semibold border p-2 rounded-md focus:ring-2 ring-slate-300 "> Cancelar </button>
            <button :style="{backgroundColor:appearance.appColor}" type="submit" class="font-semibold border p-2 rounded-md focus:ring-2 ring-slate-300 "> Guardar </button>
        </div>

    </form>
</template>

<style scoped>

</style>