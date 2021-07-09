const DateUtil = require('../../src/utils/DateUtil');

describe('Testando o TruncByHour da DateUtil', () => {

    it('Deve retornar uma String', () => {
   
        const response = DateUtil.truncByHour(new Date());

        expect(typeof response).toBe('string');
    });

    it('Deve retornar o formato correto de data', () => {
   
        const response = DateUtil.truncByHour(new Date('2021-07-09T14:32:40'));
        
        expect(response).toBe('2021-07-09_14:00');
    });

    it('Deve retornar um undefined se receber data inválida', () => {
   
        const response = DateUtil.truncByHour(new Date(''));
        
        expect(response).toBeUndefined();
    });

    it('Deve retornar um undefined se nao receber uma data', () => {
   
        const response = DateUtil.truncByHour();
        
        expect(response).toBeUndefined();
    });
});

describe('Testando o formatToDate da DateUtil', () => {

    it('Deve retornar uma objeto', () => {
   
        const response = DateUtil.formatToDate('2021-07-09_14:00');

        expect(typeof response).toBe('object');
    });
    
    it('Deve retornar um objeto date correto', () => {
   
        const response = DateUtil.formatToDate('2021-07-09_14:00');

        expect(response.getDate()).toBe(9);
        expect(response.getMonth()).toBe(6);
        expect(response.getFullYear()).toBe(2021);
        expect(response.getHours()).toBe(14);
    });

    it('Deve retornar um undefined se nao receber o formato valido', () => {
   
        const response = DateUtil.formatToDate('');

        expect(response).toBeUndefined();
    });

    it('Deve retornar um undefined se nao receber o formato', () => {
   
        const response = DateUtil.formatToDate();

        expect(response).toBeUndefined();
    });
});