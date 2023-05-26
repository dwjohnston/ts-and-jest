import { hello } from ".";

describe(hello, () => {
    it("returns a string", () => {

        expect(hello()).toBe("hello");
    });
})