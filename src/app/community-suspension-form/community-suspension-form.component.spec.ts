import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunitySuspensionFormComponent } from './community-suspension-form.component';

describe('CommunitySuspensionFormComponent', () => {
  let component: CommunitySuspensionFormComponent;
  let fixture: ComponentFixture<CommunitySuspensionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunitySuspensionFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunitySuspensionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
