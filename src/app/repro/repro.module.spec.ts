import { ReproModule } from './repro.module';

describe('ReproModule', () => {
  let reproModule: ReproModule;

  beforeEach(() => {
    reproModule = new ReproModule();
  });

  it('should create an instance', () => {
    expect(reproModule).toBeTruthy();
  });
});
