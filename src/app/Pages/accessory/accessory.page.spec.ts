import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccessoryPage } from './accessory.page';

describe('AccessoryPage', () => {
  let component: AccessoryPage;
  let fixture: ComponentFixture<AccessoryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AccessoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
