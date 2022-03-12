const Intern = require('../lib/intern.js')

describe('Intern', () => {
    describe('getRole', () => {
        it('should return the interns role', () => {
            const result = new Intern('Intern');
            expect(result.role).toBe('Intern');
        });
    });
    describe('getSchool', () => {
        it('should return the interns school', () => {
            const result = new Intern('Intern Bar', '123', 'intern@bar.com', 'University of Sydney', 'Intern');;
            expect(result.school).toBe('University of Sydney');
        });
    });
});
