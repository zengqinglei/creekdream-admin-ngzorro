import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'layout-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.less']
})
export class LayoutDefaultComponent implements OnInit {
  isCollapsed = false;
  triggerTemplate = null;

  @ViewChild('trigger') customTrigger: TemplateRef<void>;

  /** custom trigger can be TemplateRef **/
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }

  constructor() { }

  ngOnInit() {
  }

}
