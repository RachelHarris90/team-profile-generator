const Engineer = require('../lib/engineer.js')

describe('Engineer', () => {
    describe('getRole', () => {
        it('should return the engineer role', () => {
            const result = new Engineer('Engineer', 'FooBar90');
            expect(result.role).toBe('Engineer');
        });
    });
    describe('getGithub', () => {
        it('should return the engineer github username', () => {
            const result = new Engineer('foo@bar.com', 'Foo Bar', '123', 'FooBar90', 'Engineer');
            expect(result.github).toBe('FooBar90');
        });
    });
});
