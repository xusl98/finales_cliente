import { CompaniasPage } from './companias.po';
import { browser, logging, by, element } from 'protractor';

describe('workspace-project Companias', () => {
  let page: CompaniasPage;

  beforeEach(() => {
    page = new CompaniasPage();
    browser.ignoreSynchronization = true;
  });

  it('Debe mostrar la pantalla companias', async () => {
    browser.get('http://localhost:4200/companias');
    expect(page.getTituloCompanias()).toEqual('Compañías');
  });




    it('Debe mostrar la pantalla nuevoaCompañía', async () => {
      browser.get('http://localhost:4200/companias');
      element(by.id("btnNuevo")).click();
      expect(page.getTituloDetail()).toEqual('Nueva Compañía');
    });
    it('Debe regresar al maestro', async () => {
      browser.get('http://localhost:4200/companias');
      element(by.id("btnNuevo")).click();
      element(by.id("btnCancelar")).click();
      expect(page.getTituloCompanias()).toEqual('Compañías');
    });




  afterEach(async () => {
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});