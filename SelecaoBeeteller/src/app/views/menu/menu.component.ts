import { state, style, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

const ANIMATE = {
  VISIBLE: 'visibleAnimated',
  HIDDEN: 'hiddenAnimated'
};

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  animations: [
    trigger('children', [
      state(ANIMATE.HIDDEN, style({
        height: '0px'
      })),
      state(ANIMATE.VISIBLE, style({
        height: '*'
      })),
      state('visible', style({
        height: '*'
      })),
      state('hidden', style({
        height: '0px'
      }))
    ])
  ]
})
export class MenuComponent {

  indiceDropdown: number;

  constructor() { }

  ativarDropdown(indexDropdown: number) {
    if (indexDropdown === this.indiceDropdown) {
      this.indiceDropdown = -1;
      return;
    }

    this.indiceDropdown = indexDropdown;
  }

  obterAnimacao(indexDropdown: number) {
    return this.verificarDropdownAtivo(indexDropdown) ? ANIMATE.VISIBLE : ANIMATE.HIDDEN;
  }

  verificarDropdownAtivo(indexDropdown: number) {
    return this.indiceDropdown === indexDropdown;
  }

  verificarRota(param: string) {
    return window.location.hash.includes(param);
  }

}
