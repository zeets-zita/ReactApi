

import getWeather from '../App';

import App from '../App';

let obj = new App();

test('weather', async () => {
  await expect(obj.getWeather()).resolves.toBe('weather forcast');
});


test(App, () => {
  return obj.getWeather().then(data => {
    expect(data).toBe('peanut butter');
  });
});

