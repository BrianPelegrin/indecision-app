<script setup lang="ts">
interface IProps{
    modelValue:boolean;
    persistent?:boolean;
}
interface IEmits{
    (event:'clickBackdrop'):void
}
defineEmits<IEmits>()
defineProps<IProps>()
</script>

<template>
    <div 
        v-if="modelValue" 
        @click="()=>{
            if(!persistent){
                $emit('clickBackdrop')
            }
        }" 
        class="top-0 fixed  sticky-0  flex justify-center items-center h-full w-full"
        style="background-color: rgb(243 244 246 / 0.7);"
    >
        <div class="flex justify-center items-center" @click.stop="">
            <slot />
        </div>
    </div>    
</template>

<style scoped>

</style>
