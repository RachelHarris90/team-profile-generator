const Employee = require("../lib/employee-profile.js");



describe("Employee", () => {
    describe("employee-title", () => {
        it("should set the title of an employee to Employee", () => {
            const obj = new Employee();

            expect("title" in obj).toEqual("Employee");
        })

    });
});