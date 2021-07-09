const TransformUtil = require('../../src/utils/TransformUtil');
const objectSummed = require('../mock/objectSummed');

describe('Testing TransformUtil', () => {
    it('Should return an array with length equal to 2', () => {
        const [obj1, obj2] = TransformUtil.objectToArray(objectSummed);

        expect(obj1).toHaveProperty('ts');
        expect(obj1).toHaveProperty('value');
        // expect(obj2).toHaveProperty('ts');
        // expect(obj2).toHaveProperty('value');
    })
})