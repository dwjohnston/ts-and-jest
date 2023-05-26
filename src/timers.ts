let value = 0; 

export async function foo() {

    setTimeout(() => {
        value += 1; 
    }, 1000); 

    return value; 
}

