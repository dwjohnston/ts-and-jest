


let a = 0; 

const b = new Map(); 


export function foo() {
    
    const a2 = a; 
    const b2 = b.size; 

    a++; 
    b.set(Math.random(), Math.random()); 

    return {
        a: a2, 
        b: b2
    }
}