import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SamirMendezPage } from './samir-mendez.page';

describe('SamirMendezPage', () => {
  let component: SamirMendezPage;
  let fixture: ComponentFixture<SamirMendezPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamirMendezPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SamirMendezPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
