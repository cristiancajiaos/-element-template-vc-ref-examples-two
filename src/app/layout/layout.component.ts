import { Component, ElementRef, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  @ViewChild("tref", { read: ElementRef }) tref: ElementRef;

  @ViewChild("tpl") tpl: TemplateRef<any>;

  @ViewChild("vc", { read: ViewContainerRef }) vc: ViewContainerRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log(this.tref.nativeElement.textContent);

    let view = this.tpl.createEmbeddedView(null);
    this.vc.insert(view);

    let elementRef = this.tpl.elementRef;
    console.log(elementRef.nativeElement.textContext);
  }

}
