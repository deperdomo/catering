import { Quote, mailtoUrl, quoteErrors } from './quote-draft';

describe('quote', () => {
  const ok: Quote = { tipo: 'Boda', fecha: '2027-06-13', invitados: 80, zona: '', nombre: 'Ana', mensaje: '' };

  it('accepts a complete request', () => {
    expect(quoteErrors(ok, '2027-01-01')).toEqual({});
  });

  it('names every missing or wrong required field', () => {
    const e = quoteErrors({ ...ok, tipo: '', fecha: '2026-01-01', invitados: null, nombre: '  ' }, '2027-01-01');
    expect(Object.keys(e)).toEqual(['tipo', 'fecha', 'invitados', 'nombre']);
    expect(e['fecha']).toContain('ya ha pasado');
  });

  it('rejects zero or fractional guests', () => {
    expect(quoteErrors({ ...ok, invitados: 0 }, '2027-01-01')['invitados']).toBeDefined();
    expect(quoteErrors({ ...ok, invitados: 2.5 }, '2027-01-01')['invitados']).toBeDefined();
  });

  it('writes the request into the mail link', () => {
    const url = decodeURIComponent(mailtoUrl(ok));
    expect(url).toMatch(/^mailto:danielacateringyeventos@gmail\.com\?subject=Presupuesto: Boda, 13 de junio de 2027, 80 invitados&body=/);
    expect(url).toContain('Zona o lugar: por concretar');
    expect(url).toContain('\r\nAna');
  });
});
