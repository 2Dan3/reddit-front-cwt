import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlairTagComponent } from './flair-tag.component';

describe('FlairTagComponent', () => {
  let component: FlairTagComponent;
  let fixture: ComponentFixture<FlairTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlairTagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlairTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
