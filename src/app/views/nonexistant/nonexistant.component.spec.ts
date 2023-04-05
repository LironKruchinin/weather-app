import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonexistantComponent } from './nonexistant.component';

describe('NonexistantComponent', () => {
  let component: NonexistantComponent;
  let fixture: ComponentFixture<NonexistantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonexistantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonexistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
