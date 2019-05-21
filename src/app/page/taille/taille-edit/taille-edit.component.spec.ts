import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TailleEditComponent } from './taille-edit.component';

describe('TailleEditComponent', () => {
  let component: TailleEditComponent;
  let fixture: ComponentFixture<TailleEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TailleEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TailleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
