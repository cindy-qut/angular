import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TailleAddComponent } from './taille-add.component';

describe('TailleAddComponent', () => {
  let component: TailleAddComponent;
  let fixture: ComponentFixture<TailleAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TailleAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TailleAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
