import { NguiPage } from './app.po';

describe('ngui App', () => {
  let page: NguiPage;

  beforeEach(() => {
    page = new NguiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
