import { OsisPage } from './app.po';

describe('osis App', function() {
  let page: OsisPage;

  beforeEach(() => {
    page = new OsisPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
