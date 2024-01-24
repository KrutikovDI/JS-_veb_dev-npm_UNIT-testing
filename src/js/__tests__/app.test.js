import { showPowerLife } from '../app';
import { sortsListObjects } from '../app';


test('show the power of life', () => {
  const objectMag = {name: 'Маг', health: 90};
  expect(showPowerLife(objectMag)).toBe('healthy');
});

test('sorts a list of objects', () => {
  const objects = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ];

  const objectsSorts = [
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
  ]
  expect(sortsListObjects(objects)).toEqual(objectsSorts);
});