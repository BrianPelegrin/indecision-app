<script setup lang="ts">
import { ref, watch } from "vue";
import type { IMessage } from "../interfaces/index"
interface IProps{
    messages:IMessage[];
    profileImage:string;
    messageColor:string;
    contactMessageColor:string;
}
const props = defineProps<IProps>()
const chatRef = ref<HTMLDivElement | null>();
const contactImage = `https://randomuser.me/api/portraits/women/${Math.floor(Math.random() * 50)}.jpg`

watch(props,()=>{
    console.log('DEBIO SCROLLEAR');
    
    setTimeout(()=>{
        chatRef.value?.scrollTo({
            top: chatRef.value.scrollHeight,
            behavior:'smooth'
        })

    },600)
},
{
    deep:true
})
</script>

<template>
    <div ref="chatRef" class="flex-1 overflow-y-auto p-2">    
        <div class="flex flex-col space-y-2">
            <template v-for="message in messages" :key="message.id">

                <div v-if="message.isOwnMessage" :id="message.id" class="flex items-center justify-end">             
                    <div 
                      class="text-black p-2 rounded-lg max-w-xs shadow-md" 
                      :style="{backgroundColor:messageColor}"
                    >
                        <img v-if="message.imgSrc" :src="message.imgSrc" :alt="message.id" width="100" />
                        <span class="capitalize">{{ message.message }}</span>
                    </div>            
                    <div class="ms-1">
                        <img 
                            :src="profileImage" 
                            alt="contact-image" 
                            class="rounded-full shadow-md" 
                            width="50" 
                        />
                    </div>
                </div>
                
                <div v-else :id="message.id" class="flex items-center justify-start">   
                    <div class="me-1">
                        <img 
                            :src="contactImage" 
                            alt="contact-image" 
                            class="rounded-full shadow-md" 
                            width="50" 
                        />
                    </div>             
                    <div 
                      class="text-black p-2 rounded-lg max-w-xs shadow-md" 
                      :style="{backgroundColor:contactMessageColor}"
                    >
                        <img v-if="message.imgSrc" :src="message.imgSrc" :alt="message.id" width="200" class=" object-cover rounded-md mb-2" />
                        <span class="capitalize">{{ message.message }}</span>
                    </div>
                </div>

            </template>
        </div>
    </div>
</template>

<style scoped>

</style>