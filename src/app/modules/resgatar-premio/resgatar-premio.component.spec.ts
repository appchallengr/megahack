import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResgatarPremioComponent } from './resgatar-premio.component';

describe('ResgatarPremioComponent', () => {
  let component: ResgatarPremioComponent;
  let fixture: ComponentFixture<ResgatarPremioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResgatarPremioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResgatarPremioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
