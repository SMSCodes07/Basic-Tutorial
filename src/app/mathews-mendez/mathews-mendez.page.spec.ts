import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MathewsMendezPage } from './mathews-mendez.page';

describe('MathewsMendezPage', () => {
  let component: MathewsMendezPage;
  let fixture: ComponentFixture<MathewsMendezPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathewsMendezPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MathewsMendezPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
