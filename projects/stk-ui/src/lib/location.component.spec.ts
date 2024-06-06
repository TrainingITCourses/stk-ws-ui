import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationComponent } from './location.component';

describe('LocationComponent', () => {
  let component: LocationComponent;
  let fixture: ComponentFixture<LocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LocationComponent);
    component = fixture.componentInstance;
    TestBed.runInInjectionContext(() => {
      const componentRef = fixture.componentRef;
      componentRef.setInput('value', 'Paris');
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the location', () => {
    const element = fixture.nativeElement;
    expect(element.textContent).toContain('📍at Paris');
  });
});
