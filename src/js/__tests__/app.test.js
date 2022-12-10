/**
 * @jest-environment jsdom
 */
import validGeolacation from '../valid';

test('valid test', () => {
  expect(validGeolacation('51.50851, −0.12572')).toBeTruthy();
  expect(validGeolacation('51.50851,−0.12572')).toBeTruthy();
  expect(validGeolacation('[51.50851, −0.12572]')).toBeTruthy();
});
