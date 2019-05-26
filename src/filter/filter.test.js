const { withoutSatellites, onlyFastSpinning } = require('./filter');
const { solarSystemArray, solarSystemObject } = require('../data/solar-system');

describe('withoutSatellites', () => {
  test('it should return only planets with no satellites', () => {
    expect(withoutSatellites(solarSystemArray)).toEqual([
      solarSystemObject.Mercury,
      solarSystemObject.Venus,
    ]);
  });
});

describe.skip('onlyFastSpinning', () => {
  test('it should return only planets that spin faster than earth', () => {
    expect(onlyFastSpinning(solarSystemArray)).toEqual([solarSystemObject.Jupiter]);
  });
});
