import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenceUserComponent } from './agence-user.component';

describe('AgenceUserComponent', () => {
  let component: AgenceUserComponent;
  let fixture: ComponentFixture<AgenceUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenceUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgenceUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
