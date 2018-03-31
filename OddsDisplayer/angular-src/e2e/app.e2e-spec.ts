import { OddsDisplayerPage } from './app.po';

describe('odds-displayer App', function() {
  let page: OddsDisplayerPage;

  beforeEach(() => {
    page = new OddsDisplayerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
