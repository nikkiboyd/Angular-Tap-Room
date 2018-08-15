import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TapRoomComponent } from './tap-room.component';

describe('TapRoomComponent', () => {
  let component: TapRoomComponent;
  let fixture: ComponentFixture<TapRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TapRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TapRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
