import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsTwoItemsComponent } from './goods-two-items.component';

describe('GoodsTwoItemsComponent', () => {
  let component: GoodsTwoItemsComponent;
  let fixture: ComponentFixture<GoodsTwoItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoodsTwoItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoodsTwoItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
