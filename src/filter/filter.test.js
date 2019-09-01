const { withoutSatellites, onlyLongDays } = require('./filter');
const { solarSystemArray, solarSystemObject } = require('../data/solar-system');

describe('withoutSatellites', () => {
  test('it should return only planets with no satellites', () => {
    expect(withoutSatellites(solarSystemArray)).toEqual([
      solarSystemObject.Mercury,
      solarSystemObject.Venus,
    ]);
  });
});

describe.skip('onlyLongDays', () => {
  test('it should return only planets where days are longer than on earth', () => {
    expect(onlyLongDays(solarSystemArray)).toEqual([
      solarSystemObject.Jupiter,
      solarSystemObject.Saturn,
      solarSystemObject.Uranus,
      solarSystemObject.Neptune,
    ]);
  });
});
