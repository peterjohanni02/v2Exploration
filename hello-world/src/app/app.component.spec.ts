import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('should create the app', async () => {
    const fixture = await TestBed.configureTestingModule({
      imports: [AppComponent]
    }).createComponent(AppComponent);

    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render Hello world title', async () => {
    const fixture = await TestBed.configureTestingModule({
      imports: [AppComponent]
    }).createComponent(AppComponent);

    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello world');
  });
});
