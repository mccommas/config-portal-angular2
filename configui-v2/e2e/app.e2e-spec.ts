import { ConfiguiV2Page } from './app.po';

describe('configui-v2 App', function() {
  let page: ConfiguiV2Page;

  beforeEach(() => {
    page = new ConfiguiV2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
