import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerApproveAddComponent } from './manager-approve-add.component';

describe('ManagerApproveAddComponent', () => {
  let component: ManagerApproveAddComponent;
  let fixture: ComponentFixture<ManagerApproveAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerApproveAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerApproveAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
