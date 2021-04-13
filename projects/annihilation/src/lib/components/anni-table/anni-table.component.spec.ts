import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AnniTableComponent } from './anni-table.component'

describe('AnniTableComponent', () => {
  let component: AnniTableComponent
  let fixture: ComponentFixture<AnniTableComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnniTableComponent ]
    })
                 .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(AnniTableComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
