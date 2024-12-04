import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaveurUsersComponent } from './laveur-users.component';

describe('LaveurUsersComponent', () => {
  let component: LaveurUsersComponent;
  let fixture: ComponentFixture<LaveurUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaveurUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaveurUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
