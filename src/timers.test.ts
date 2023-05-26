import { foo } from "./timers";

describe(foo, () => {



    /**
     * These tests fail, and actually this demonstrates why this approach is a bit problematic 
     * The timeout occurs after the tests complete 
     */
    describe("Non-faking method of testing", () => {

        it("if called immediately, you will get the same value", async () => {

            const result1 = await foo();
            const result2 = await foo();

            expect(result1).toBe(0);
            expect(result2).toBe(0);
        });

        it("if waiting 1000ms you will get the second value", async () => {

            const result1 = await foo();

            await new Promise((res => setTimeout(res, 1500)));

            const result2 = await foo();

            expect(result1).toBe(0);
            expect(result2).toBe(1);
        });
    });


    describe.only("Mock timers  of testing", () => {

        beforeEach(() => {
            jest.useFakeTimers();

        })


        it("if called immediately, you will get the same value", async () => {

            const result1 = await foo();
            const result2 = await foo();

            expect(result1).toBe(0);
            expect(result2).toBe(0);
        });

        it("if waiting 1000ms you will get the second value",  async () => {

            const result1 = foo();

            jest.advanceTimersByTime(1500);

            const result2 = foo();

            expect(await result1).toBe(0);
            expect(await result2).toBe(1);
        });
    });
}); 