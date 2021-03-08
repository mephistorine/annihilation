import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnihilationComponent } from './annihilation.component';

describe('AnnihilationComponent', () => {
  let component: AnnihilationComponent;
  let fixture: ComponentFixture<AnnihilationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnihilationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnihilationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
