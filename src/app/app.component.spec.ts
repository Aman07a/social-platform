import { AppComponent } from './app.component';

// Running unit tests using Karma
// ng test
describe('AppComponent', () => {
  it('should have a defined title', () => {
    const component = new AppComponent();
    expect(component.title).toBeDefined();
  });
});
