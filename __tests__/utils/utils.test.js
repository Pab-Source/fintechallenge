import { convertTemp, daysWeek, createAction } from '../../src/utils';

describe('Functions utils', () => {
  const value = 301;

  test('convertTemp debe restar 273 para convertir a centigrados', () => {
    const temp = convertTemp(value);
    expect(temp).toBe(value - 273);
  });

  test('convertTemp debe recibir un número, y retornar un número', () => {
    const temp = convertTemp(value);
    expect('number').toBe(typeof temp);
  });

  test('daysWeek debe retornar un arreglo con los 7 días de la semana', () => {
    const day = daysWeek('es');
    expect(7).toBe(day.length);
  });

  test('daysWeek debe retornar un arreglo con los 7 días de la semana en el mismo orden, en ambos idiomas', () => {
    const spanish = daysWeek('es');
    const english = daysWeek('en');

    expect('domingo').toBe(spanish[0]);
    expect('sunday').toBe(english[0]);
  });

  test('createAction recibe un string que corresponde a un type de action, y debe retornar un objeto con las 3 opciones, init, success y error', () => {
    const action = createAction('ACTION_TEST');
    expect('ACTION_TEST_INIT').toBe(action.init().type);
    expect('ACTION_TEST_SUCCESS').toBe(action.success().type);
    expect('ACTION_TEST_ERROR').toBe(action.error().type);
  });

  test('createAction al ejecutar cualquiera de sus acciones debe recibir el payload como parametro, y retornar un objeto con el type, y el payload que recibió como parametro', () => {
    const action = createAction('ACTION_TEST');

    const actionTest = {
      type: 'ACTION_TEST_INIT',
      payload: {
        test: 'test',
      },
    };
    expect(actionTest).toEqual(action.init({ test: 'test' }));
  });
});
