import { browser, by, element, ElementFinder } from 'protractor';

export class CompaniasPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  clickTab(): Promise<void> {
    return element(by.css('#ngb-nav-1')).click() as Promise<void>;
  }

  getTituloCompanias(): Promise<string> {
    return element(by.id('tituloCompanias')).getText() as Promise<string>;
  }
  getTituloDetail(): Promise<string> {
    return element(by.id('tituloDetail')).getText() as Promise<string>;
  }




}