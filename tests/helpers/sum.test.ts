import { expect, test, describe } from "vitest"
import { sum, addArray } from "../../src/helpers/sum"

describe('addfunction',()=>{
    
    test('adds 1 + 2 to equal 3',()=>{
    
        //Preparacion
        const a = 1;
        const b = 2;
    
        //Estimulo
        const result = sum(a,b)
        
        //El comportamiento esperado
        expect(result).toBe(a+b)
    })
})

describe('addArray',()=>{

    test('adds all numbers of this array: [1,2,3]',()=>{
    
        //Preparacion
        const numList:number[] = [1,2,3];
    
        //Estimulo
        const result = addArray(numList)
    
        //El comportamiento esperado
        expect(result).toBe(1+2+3)
    })
    
    test('shold return 0 if the array is empty',()=>{
    
        //Preparacion
        const numList:number[] = []
    
        //Estimulo
        const result = addArray(numList)
    
        //El comportamiento esperado
        expect(result).toBe(0)
    })
})
