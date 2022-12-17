// https: //www.codewars.com/kata/5574835e3e404a0bed00001b/train/javascript

    function getParticipants(handshakes) {
        //  if (handshakes === 0) 
        //    return 0;
        //      else   
        //        return handshakes - 1 - getParticipants(handshakes - 1);  
        for (var i = 0, k = 0; i < handshakes; i += k++);
        return k;
    }

//  assert.strictEqual(getParticipants(7), 5) 10 вроде дожно быть !!!!!!!!


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Handshake problem", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(getParticipants(0), 0)
        assert.strictEqual(getParticipants(1), 2)
        assert.strictEqual(getParticipants(3), 3)
        assert.strictEqual(getParticipants(6), 4)
        assert.strictEqual(getParticipants(7), 5)
    })
})


//https://foxford.ru/wiki/matematika/chislo-sochetaniy#:~:text=%D0%A7%D0%B8%D1%81%D0%BB%D0%BE%D0%BC%20%D1%81%D0%BE%D1%87%D0%B5%D1%82%D0%B0%D0%BD%D0%B8%D0%B9%20%D0%B8%D0%B7%20%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D0%B2%20%D0%BF%D0%BE,%D1%80%D0%B0%D0%B7%D0%BB%D0%B8%D1%87%D0%BD%D1%8B%D1%85%20%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D0%B2%20%D0%BD%D0%B5%D0%BA%D0%BE%D1%82%D0%BE%D1%80%D0%BE%D0%B3%D0%BE%20-%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%BC%D0%BD%D0%BE%D0%B6%D0%B5%D1%81%D1%82%D0%B2%D0%B0.
// https://ru.khanacademy.org/math/probability/probability-geometry/counting-combinations/v/handshaking-combinations