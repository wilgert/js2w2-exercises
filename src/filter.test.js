const { withoutSatellites, onlyFastSpinning } = require('./filter');
const { solarSystemArray, solarSystemObject } = require('./solar-system');

describe('withoutSatellites', () => {
  test('it should return only planets with no satellites', () => {
    expect(withoutSatellites(solarSystemArray)).toEqual([
      solarSystemObject.Mercury,
      solarSystemObject.Venus,
    ]);
  });
});

xdescribe('onlyFastSpinning', () => {
  test('it should return only planets that spin faster than earth', () => {
    expect(solarSystemArray.filter(onlyFastSpinning)).toEqual([solarSystemObject.Jupiter]);
  });
});
