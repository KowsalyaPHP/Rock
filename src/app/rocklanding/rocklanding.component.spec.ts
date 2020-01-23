import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocklandingComponent } from './rocklanding.component';

describe('RocklandingComponent', () => {
  let component: RocklandingComponent;
  let fixture: ComponentFixture<RocklandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocklandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocklandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
