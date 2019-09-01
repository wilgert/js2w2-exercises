const { circumference } = require('./map');
const { solarSystemArray } = require('../data/solar-system');

describe.skip('circumference', () => {
  test('should return circumference of the planets', () => {
    expect(circumference(solarSystemArray)).toEqual([
      15324.68896421101,
      38025.83747905085,
      40074.1558891914,
      21343.980488489055,
      449184.91761026863,
      378675.0120930993,
      160591.93326620304,
      158769.80952712096,
      7288.49495632832,
    ]);
  });
});
