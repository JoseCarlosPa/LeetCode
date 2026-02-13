import { describe, it, expect } from 'vitest';
import { isValid } from './index.ts';

describe('isValid', () => {
  it('debería retornar true para "()"', () => {
    expect(isValid('()')).toBe(true);
  });

  it('debería retornar true para "()[]{}"', () => {
    expect(isValid('()[]{}')).toBe(true);
  });

  it('debería retornar false para "(]"', () => {
    expect(isValid('(]')).toBe(false);
  });

  it('debería retornar false para "([)]"', () => {
    expect(isValid('([)]')).toBe(false);
  });

  it('debería retornar true para "([])"', () => {
    expect(isValid('([])')).toBe(true);
  });

  it('debería retornar true para cadena vacía', () => {
    expect(isValid('')).toBe(true);
  });

  it('debería retornar false para solo un paréntesis de apertura', () => {
    expect(isValid('(')).toBe(false);
  });

  it('debería retornar false para solo un paréntesis de cierre', () => {
    expect(isValid(']')).toBe(false);
  });

  it('debería retornar false para apertura y cierre desordenados', () => {
    expect(isValid('([)')).toBe(false);
  });

  it('debería retornar true para anidados correctamente', () => {
    expect(isValid('{[()()]}')).toBe(true);
  });
});

