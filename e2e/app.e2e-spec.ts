import { AycapFrontendPage } from './app.po';

describe('aycap-frontend App', function() {
  let page: AycapFrontendPage;

  beforeEach(() => {
    page = new AycapFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
