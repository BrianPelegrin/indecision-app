<script setup lang="ts">
import type { IMessage } from "../interfaces/index"
interface IProps{
    messages:IMessage[]
}
defineProps<IProps>()
</script>

<template>
<div class="flex-1 overflow-y-auto p-4">
        <div class="flex flex-col space-y-2">
            <!-- Messages go here -->
            <!-- Example Message -->
            <div class="flex justify-end">
                <div class="bg-blue-200 text-black p-2 rounded-lg max-w-xs">
                    Hey, how's your day going?
                </div>
            </div>
            
            <!-- Example Received Message -->
            <div class="flex">
                <div class="bg-gray-300 text-black p-2 rounded-lg max-w-xs">
                    Not too bad, just a bit busy. How about you?
                </div>
            </div>
            <!-- Example Message -->
            <div class="flex justify-end">
              <div class="bg-blue-200 text-black p-2 rounded-lg max-w-xs">
                I'm good, thanks. Anything exciting happening?
              </div>
            </div>
            
            <!-- Example Received Message -->
            <div class="flex">
              <div class="bg-gray-300 text-black p-2 rounded-lg max-w-xs">
                Not really, just the usual. Work and errands.
              </div>
            </div>
            <!-- Example Message -->
            <div class="flex justify-end">
              <div class="bg-blue-200 text-black p-2 rounded-lg max-w-xs">
                Sounds like a typical day. Got any plans for the weekend?
              </div>
            </div>
            
            <!-- Example Received Message -->
            <div class="flex">
              <div class="bg-gray-300 text-black p-2 rounded-lg max-w-xs">
                Not yet, I'm hoping to relax and maybe catch up on some reading. How about you?
              </div>
            </div>
            <!-- Example Message -->
            <div class="flex justify-end">
              <div class="bg-blue-200 text-black p-2 rounded-lg max-w-xs">
                I might go hiking if the weather's nice. Otherwise, just taking it easy
              </div>
            </div>
            
            <!-- Example Received Message -->
            <div class="flex">
              <div class="bg-gray-300 text-black p-2 rounded-lg max-w-xs">
                Hiking sounds fun. Hope the weather cooperates for you!
              </div>
            </div>
            <!-- Example Message -->
            <div class="flex justify-end">
              <div class="bg-blue-200 text-black p-2 rounded-lg max-w-xs">
                Thanks! Fingers crossed. Enjoy your day!
              </div>
            </div>
            
            <!-- Example Received Message -->
            <div class="flex">
              <div class="bg-gray-300 text-black p-2 rounded-lg max-w-xs">
                You too, take care!
              </div>
            </div>
            <!-- Example Message -->
            <div class="flex justify-end">
              <div class="bg-blue-200 text-black p-2 rounded-lg max-w-xs">
                Sure
              </div>
            </div>
            <div class="flex justify-end">
              <div class="bg-blue-200 text-black p-2 rounded-lg max-w-xs">
                Thanks
              </div>
            </div>
            
            <div class="flex justify-end">
              <div class="bg-blue-200 text-black p-2 rounded-lg max-w-xs">
                😁
              </div>
            </div>
            <!-- Example Message -->
            <div class="flex">
              <div class="bg-gray-300 text-black p-2 rounded-lg max-w-xs">
                Okay
              </div>
            </div>
            
            <!-- Example Received Message -->
            <div class="flex">
              <div class="bg-gray-300 text-black p-2 rounded-lg max-w-xs">
                😄
              </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>