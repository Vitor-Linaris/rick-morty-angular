import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterResultComponent } from './character-result.component';

describe('CharacterResultComponent', () => {
  let component: CharacterResultComponent;
  let fixture: ComponentFixture<CharacterResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterResultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
