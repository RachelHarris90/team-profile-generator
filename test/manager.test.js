const Manager = require('../lib/manager.js')

describe('Manager', () => {
    describe('getRole', () => {
        it('should return the manager role', () => {
            const result = new Manager('Manager');
            expect(result.role).toBe('Manager');
        });
    });
    describe('getOfficeNumber', () => {
        it('should return the managers office number', () => {
            const result = new Manager('Intern Bar', '123', 'intern@bar.com', '99223344', 'Manager');;
            expect(result.officeNumber).toBe('99223344');
        });
    });
});
