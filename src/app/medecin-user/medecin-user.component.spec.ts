import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedecinUserComponent } from './medecin-user.component';

describe('MedecinUserComponent', () => {
  let component: MedecinUserComponent;
  let fixture: ComponentFixture<MedecinUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedecinUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedecinUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
