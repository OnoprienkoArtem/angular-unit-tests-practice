import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {

  let component: CounterComponent;

  beforeEach(() => {
    component = new CounterComponent();
  });

  // beforeAll, afterEach, afterAll

  // if want skip some test, just add x => xit

  it('should increment counter by 1', () => {
    component.increment();
    expect(component.counter).toBe(1);
  });

  it('should decrement counter by 1', () => {
    component.decrement();
    expect(component.counter).toBe(-1);
  });

});
