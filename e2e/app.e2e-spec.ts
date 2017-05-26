import { IpConnectPage } from './app.po';

describe('ip-connect App', () => {
  let page: IpConnectPage;

  beforeEach(() => {
    page = new IpConnectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
