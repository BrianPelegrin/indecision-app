<script setup lang="ts">
import type { IMessage } from "../interfaces/index"
interface IProps{
    messages:IMessage[];
    profileImage?:string;
    messageColor:string;
    contactMessageColor:string;
}
defineProps<IProps>()

const contactImage = `https://randomuser.me/api/portraits/women/${Math.floor(Math.random() * 50)}.jpg`
</script>

<template>
<div class="flex-1 overflow-y-auto p-2">    
        <div class="flex flex-col space-y-2">
            <!-- Messages go here -->
            <!-- Example Message -->
            <div class="flex justify-end items-center " >
                <div 
                  class="text-black p-2 rounded-lg max-w-xs shadow-md" 
                  :style="{
                    backgroundColor:messageColor
                  }"
                >
                    Hey, how's your day going?
                </div>            
                <div>
                    <img :src="profileImage" alt="contact-image" class="rounded-full ms-1 shadow-md" width="50" />
                </div>
            </div>
            
            <!-- Example Received Message -->
            <div class="flex justify-start items-center">
                <div>
                    <img :src="contactImage" alt="contact-image" class="rounded-full me-1 shadow-md" width="50" />
                </div>
                <div 
                  class="bg-gray-300 text-black p-2 rounded-lg max-w-xs shadow-md"
                  :style="{
                    backgroundColor:contactMessageColor
                  }" 
                >
                    Not too bad, just a bit busy. How about you?
                </div>
            </div>
            
        </div>
    </div>
</template>

<style scoped>

</style>