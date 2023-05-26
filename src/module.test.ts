import { foo } from "./module";


describe(foo, () => {

    beforeEach(() => {

        // Doesn't behave how we expect
        jest.resetModules();
    })

    it("test 1", () => {



        const result1 = foo();
        expect(result1.a).toBe(0); 
        expect(result1.b).toBe(0); 

        const result2 = foo();
        expect(result2.a).toBe(1); 
        expect(result2.b).toBe(1); 

    }); 

    it("test 2", () => {
        const result1 = foo();
        expect(result1.a).toBe(0); 
        expect(result1.b).toBe(0); 

        const result2 = foo();
        expect(result2.a).toBe(1); 
        expect(result2.b).toBe(1); 
    }); 
}); 

describe.only(foo, () => {

    beforeEach(() => {

    })

    it("test 1", async () => {


        const module = await import( "./module");


        const result1 = module.foo();
        expect(result1.a).toBe(0); 
        expect(result1.b).toBe(0); 

        const result2 = module.foo();
        expect(result2.a).toBe(1); 
        expect(result2.b).toBe(1); 

    }); 

    it("test 2", async () => {
        const module = await import( "./module");
        const result1 = module.foo();       
        expect(result1.a).toBe(0); 
        expect(result1.b).toBe(0); 

        const result2 = module.foo();
        expect(result2.a).toBe(1); 
        expect(result2.b).toBe(1); 
    }); 
}); 