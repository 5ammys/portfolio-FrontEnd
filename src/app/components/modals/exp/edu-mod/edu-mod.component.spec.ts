import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduModComponent } from './edu-mod.component';

describe('EduModComponent', () => {
  let component: EduModComponent;
  let fixture: ComponentFixture<EduModComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EduModComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EduModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
