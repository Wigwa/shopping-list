import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Shoppinglist.DetailsComponent } from './shoppinglist.details.component';

describe('Shoppinglist.DetailsComponent', () => {
  let component: Shoppinglist.DetailsComponent;
  let fixture: ComponentFixture<Shoppinglist.DetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Shoppinglist.DetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Shoppinglist.DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
