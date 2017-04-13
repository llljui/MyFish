import { MyFishPage } from './app.po';

describe('my-fish App', () => {
  let page: MyFishPage;

  beforeEach(() => {
    page = new MyFishPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
