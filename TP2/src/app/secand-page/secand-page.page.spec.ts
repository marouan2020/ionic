import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SecandPagePage } from './secand-page.page';

describe('SecandPagePage', () => {
  let component: SecandPagePage;
  let fixture: ComponentFixture<SecandPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecandPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SecandPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
