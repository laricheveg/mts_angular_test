import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelsItemComponent } from './channels-item.component';

describe('ChannelsItemComponent', () => {
  let component: ChannelsItemComponent;
  let fixture: ComponentFixture<ChannelsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
