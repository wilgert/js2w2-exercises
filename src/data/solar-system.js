'use strict';

const solarSystemObject = {
  Mercury: {
    name: 'Mercury',
    rotationPeriod: 1408,
    period: 0.24,
    radius: 2439,
    satellites: 0,
    velocity: 47.89,
    mass: 0.06,
  },
  Venus: {
    name: 'Venus',
    rotationPeriod: 5832,
    period: 0.62,
    radius: 6052,
    satellites: 0,
    velocity: 35.04,
    mass: 0.82,
  },
  Earth: {
    name: 'Earth',
    rotationPeriod: 23.93,
    period: 1,
    radius: 6378,
    satellites: 1,
    velocity: 29.79,
    mass: 1,
  },
  Mars: {
    name: 'Mars',
    rotationPeriod: 24.62,
    period: 1.88,
    radius: 3397,
    satellites: 2,
    velocity: 24.14,
    mass: 0.11,
  },
  Jupiter: {
    name: 'Jupiter',
    rotationPeriod: 9.92,
    period: 11.86,
    radius: 71490,
    satellites: 28,
    velocity: 13.06,
    mass: 317.89,
  },
  Saturn: {
    name: 'Saturn',
    rotationPeriod: 10.66,
    period: 29.46,
    radius: 60268,
    satellites: 30,
    velocity: 9.64,
    mass: 95.18,
  },
  Uranus: {
    name: 'Uranus',
    rotationPeriod: 17.24,
    period: 84.01,
    radius: 25559,
    satellites: 24,
    velocity: 6.81,
    mass: 14.53,
  },
  Neptune: {
    name: 'Neptune',
    rotationPeriod: 16.11,
    period: 164.79,
    radius: 25269,
    satellites: 8,
    velocity: 5.43,
    mass: 17.14,
  },
  Pluto: {
    name: 'Pluto',
    rotationPeriod: 153.3,
    period: 248.54,
    radius: 1160,
    satellites: 1,
    velocity: 4.74,
    mass: 0.002,
  },
};

const solarSystemArray = Object.values(solarSystemObject);

module.exports = { solarSystemObject, solarSystemArray };
