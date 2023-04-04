import "aws-sdk-client-mock-jest";
import { helloWorld } from "../hello-world";


describe("hello-world", () => {
    let consoleMock: jest.SpyInstance;

    beforeEach(() => {
        consoleMock = jest
        .spyOn(global.console, "info")
        .mockImplementation();
    });

    afterEach(() => {
        consoleMock.mockRestore();
    })

    test("hello-world-prints-to-console", () => {
     helloWorld();
     expect(consoleMock).toHaveBeenCalledWith("Hello world");
    });
});
