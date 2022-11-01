import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpModComponent } from './exp-mod.component';

describe('ExpModComponent', () => {
  let component: ExpModComponent;
  let fixture: ComponentFixture<ExpModComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpModComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
