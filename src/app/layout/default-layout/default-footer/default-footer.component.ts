import { Component } from '@angular/core';
import { CardBodyComponent, CardComponent, ColComponent, FooterComponent, FooterModule, RowComponent } from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';

@Component({
    selector: 'app-default-footer',
    templateUrl: './default-footer.component.html',
    styleUrls: ['./default-footer.component.scss'],
    standalone: true,
    imports:[RowComponent, ColComponent, CardComponent, CardBodyComponent, IconDirective, FooterModule]
})
export class DefaultFooterComponent extends FooterComponent {
  constructor() {
    super();
  }
}
