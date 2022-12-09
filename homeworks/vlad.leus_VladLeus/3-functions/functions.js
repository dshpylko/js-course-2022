const OIL = 926;
const WATER = 1000;
const MERCURY = 1355;

const liquids = ['oil', 'water', 'mercury'];

function getWeight(weight, liquid, count) {
    return weight * count;
}

const sumOfWeights = getWeight(OIL, liquids[0], 3)
    + getWeight(WATER, liquids[1], 5)
    + getWeight(MERCURY, liquids[2], 2);
console.log(`The weight of all liquids is equal to ${sumOfWeights}`);

const num = 2;
const pow = 3;
function getResultOfPower(number, power) {
    if (power === 0) {
        return 1;
    }
    return number * getResultOfPower(number, power - 1);
}

const result = getResultOfPower(num, pow);
console.log(result);
