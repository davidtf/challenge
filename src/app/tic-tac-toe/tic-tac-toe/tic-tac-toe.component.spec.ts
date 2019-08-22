import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicTacToeComponent } from './tic-tac-toe.component';
import { Component, Input } from '@angular/core';

@Component({selector: 'app-tic-tac-toe-game', template: ''})
class TicTacToeGameStubComponent {
  @Input() height: number;
  @Input() width: number;
}

describe('TicTacToeComponent', () => {
  let component: TicTacToeComponent;
  let fixture: ComponentFixture<TicTacToeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicTacToeComponent, TicTacToeGameStubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicTacToeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
