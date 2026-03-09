import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleInfo } from './title-info';

describe('TitleInfo', () => {
  let component: TitleInfo;
  let fixture: ComponentFixture<TitleInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(TitleInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
