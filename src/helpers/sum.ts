

export const sum = (a:number,b:number):number =>{
    return a + b
}

export const addArray = (numList:number[]):number=>{
    return numList.reduce((acc, curr)=> acc + curr, 0)
}