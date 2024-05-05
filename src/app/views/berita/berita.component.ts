import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import {
  AvatarComponent,
  BadgeComponent,
  ButtonDirective,
  ButtonGroupComponent,
  CardBodyComponent,
  CardComponent,
  CardFooterComponent,
  CardHeaderComponent,
  CarouselCaptionComponent,
  CarouselComponent,
  CarouselControlComponent,
  CarouselIndicatorsComponent,
  CarouselInnerComponent,
  CarouselItemComponent,
  ColComponent,
  FormCheckInputDirective,
  FormCheckLabelDirective,
  FormControlDirective,
  FormLabelDirective,
  GutterDirective,
  InputGroupComponent,
  InputGroupTextDirective,
  ListGroupDirective,
  ListGroupItemDirective,
  ProgressBarDirective,
  ProgressComponent,
  RowComponent,
  TableDirective,
  TextColorDirective
} from '@coreui/angular';
import { ChartjsComponent } from '@coreui/angular-chartjs';
import { IconDirective } from '@coreui/icons-angular';

import { WidgetsBrandComponent } from '../widgets/widgets-brand/widgets-brand.component';
import { WidgetsDropdownComponent } from '../widgets/widgets-dropdown/widgets-dropdown.component';
import { DomSanitizer } from '@angular/platform-browser';

interface IUser {
  name: string;
  state: string;
  registered: string;
  country: string;
  usage: number;
  period: string;
  payment: string;
  activity: string;
  avatar: string;
  status: string;
  color: string;
}

let shared = [WidgetsDropdownComponent, TextColorDirective, CardComponent, CardBodyComponent, RowComponent, ColComponent, BadgeComponent, ButtonDirective, IconDirective, ReactiveFormsModule, ButtonGroupComponent, FormCheckLabelDirective, ChartjsComponent, NgStyle, CardFooterComponent, GutterDirective, ProgressBarDirective, ProgressComponent, WidgetsBrandComponent, CardHeaderComponent, TableDirective, AvatarComponent, 
CarouselComponent, CarouselIndicatorsComponent, CarouselCaptionComponent, CarouselInnerComponent, CarouselItemComponent, CarouselControlComponent,
TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, ListGroupDirective, ListGroupItemDirective, 
InputGroupComponent, InputGroupTextDirective, FormControlDirective, FormLabelDirective, FormCheckInputDirective, ButtonDirective]

@Component({
  templateUrl: 'berita.component.html',
  styleUrls: ['berita.component.scss'],
  standalone: true,
  imports: [shared]
})
export class BeritaComponent implements OnInit {

  readonly slides: any = [];

  readonly imageSrc: string[] = [
    'assets/images/angular.jpg',
    'assets/images/react.jpg',
    'assets/images/vue.jpg',
    'https://picsum.photos/id/1/800/400',
    'https://picsum.photos/id/1026/800/400',
    'https://picsum.photos/id/1031/800/400'
  ];

  readonly sampleList: string[] = [
    'Cras justo odio',
    'Dapibus ac facilisis in',
    'Morbi leo risus',
    'Porta ac consectetur ac',
    'Vestibulum at eros'
  ];

  constructor(
    private domSanitizer: DomSanitizer
  ) {
    this.slides = [
      {
        id: 0,
        src: domSanitizer.bypassSecurityTrustUrl(this.imageSrc[0]),
        title: 'First slide',
        subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
      },
      {
        id: 1,
        src: domSanitizer.bypassSecurityTrustUrl(this.imageSrc[1]),
        title: 'Second slide',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        id: 2,
        src: domSanitizer.bypassSecurityTrustUrl(this.imageSrc[2]),
        title: 'Third slide',
        subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
      }
    ];

  }

  ngOnInit(): void {

  }

  onItemChange($event: any): void {
    console.log('Carousel onItemChange', $event);
  }
}
