import { StatisticsPage } from './app.po';

describe('statistics App', function() {
  let page: StatisticsPage;

  beforeEach(() => {
    page = new StatisticsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
