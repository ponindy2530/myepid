import { MyepidPage } from './app.po';

describe('myepid App', () => {
  let page: MyepidPage;

  beforeEach(() => {
    page = new MyepidPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
