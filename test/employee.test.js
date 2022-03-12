const Employee = require('../lib/employee.js')

describe('Employee', () => {
    describe('getName', () => {
        it('should return the employee name', () => {
            const result = new Employee('Foo', '123', 'foo@bar.com', 'Employee');
            expect(result.name).toBe('Foo');
        });
    });
    describe('getId', () => {
        it('should return the employee id', () => {
            const result = new Employee('Foo', '123', 'foo@bar.com', 'Employee');
            expect(result.id).toBe('123');
        });
    });
    describe('getEmail', () => {
        it('should return the employee email', () => {
            const result = new Employee('Foo', '123', 'foo@bar.com', 'Employee');
            expect(result.email).toBe('foo@bar.com');
        });
    });
    describe('getRole', () => {
        it('should return the employee email', () => {
            const result = new Employee('Foo', '123', 'foo@bar.com', 'Employee');
            expect(result.role).toBe('Employee');
        });
    });
});

// have a name
// have an email address
// have an id