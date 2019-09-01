const { withoutSatellites, onlyFastMoving } = require('./filter');
const { solarSystemArray, solarSystemObject } = require('../data/solar-system');

describe('withoutSatellites', () => {
  test('it should return only planets with no satellites', () => {
    expect(withoutSatellites(solarSystemArray)).toEqual([
      solarSystemObject.Mercury,
      solarSystemObject.Venus,
    ]);
  });
});

describe.skip('onlyFastMoving', () => {
  test('it should return only planets that move faster than earth', () => {
    expect(onlyFastMoving(solarSystemArray)).toEqual([
      solarSystemObject.Mercury,
      solarSystemObject.Venus,
    ]);
  });
});
