import {test, describe, expect} from "vitest"
import { mount } from "@vue/test-utils"
import TheModal from "@/components/TheModal.vue"

describe('<TheModal />',()=>{

    test('Should match the modal snapshot',()=>{
        const wrapper = mount(TheModal,{
            props:{
                modelValue:true
            }
        })

        expect(wrapper).toMatchSnapshot()
        
        
    })

})
