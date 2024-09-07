<script setup lang="ts">
import { reactive, ref } from 'vue';
import ChatToolbar from './components/ChatToolbar.vue';
import ChatWindow from './components/ChatWindow.vue';
import ChatInput from './components/ChatInput.vue';
import TheModal from './components/TheModal.vue';
import AppearanceForm from './components/AppearanceForm.vue';
import { IAppConfig, IMessage } from './interfaces';
import { getId } from './helpers/identifiers';

const messages = ref<IMessage[]>([
  {
    isOwnMessage:true,
    id:getId(),
    message:"Singamos?",    
  },
  {
    isOwnMessage:false,
    id:getId(),
    message:"Si, Cuando podemos?",
    imgSrc:'https://yesno.wtf/assets/yes/11-a23cbde4ae018bbda812d2d8b2b8fc6c.gif'
  },
  {
    isOwnMessage:true,
    id:getId(),
    message:"Mañana a las 6",    
  },
  {
    isOwnMessage:false,
    id:getId(),
    message:"Ok",
  },
]);
const showProfileModal = ref<boolean>(false);
const showAppearanceModal = ref<boolean>(false);
const profileImage = ref<string>('/img/user-thumbnail.png');
const appearance = reactive<IAppConfig>({
  appColor:'#3fb884',
  messageColor:'#82e0b5',
  contactMessageColor:'#D1D5DB'
})
</script>

<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <ChatToolbar
      @click-profile="showProfileModal = true"
      @click-appearance="showAppearanceModal = true"
      :toolbar-color="appearance.appColor"
      title="La novia del pana mio ❤"
    />
    <ChatWindow 
      :profileImage="profileImage"
      :messages="messages"
      :message-color="appearance.messageColor"
      :contact-message-color="appearance.contactMessageColor"      
    />
    <ChatInput
      @submit-message="messages.push($event)"  
      :send-button-color="appearance.appColor"
    />
  </div>
  <!-- MODALS -->
  <TheModal v-model="showProfileModal" @click-backdrop="showProfileModal = false">
    <div class="bg-white rounded-md p-5 flex flex-wrap w-2/4 shadow-lg" >
      <div class="m-3" v-for="img in 15">
        <img 
          @click="()=>{
            profileImage = `https://randomuser.me/api/portraits/men/${img}.jpg`
            showProfileModal = false
          } " 
          :src="`https://randomuser.me/api/portraits/men/${img}.jpg`" 
          :alt="`img-${img}`" 
          class="rounded-full hover:cursor-pointer" 
        />
      </div>
      <div class="block w-full mt-5">
        <button 
        @click="showProfileModal = false" 
        type="button" 
        class="font-semibold border p-2 rounded-md focus:ring-2 ring-slate-300 "
        > 
          Cancelar 
        </button>            
      </div>      
    </div>
  </TheModal>
  <TheModal v-model="showAppearanceModal" @click-backdrop="showAppearanceModal = false">
    <div class="bg-white rounded-md p-5 w-80 shadow-lg ">
      <AppearanceForm
        @submit-appearance="(appAppearance)=>{
          appearance = appAppearance
          showAppearanceModal = false
        }" 
        @cancel="showAppearanceModal = false"
      />
    </div>
  </TheModal>
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
