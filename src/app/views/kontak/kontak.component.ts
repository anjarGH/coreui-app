import { NgStyle, NgTemplateOutlet } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import {
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  TextColorDirective,
} from '@coreui/angular';

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

let shared = [TextColorDirective,
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,]

@Component({
  templateUrl: 'kontak.component.html',
  styleUrls: ['kontak.component.scss'],
  standalone: true,
  imports: [shared]
})
export class KontakComponent implements OnInit {

  public liveDemoVisible = true;

  ngOnInit(): void {
      
  }

  toggleLiveDemo() {
    this.liveDemoVisible = !this.liveDemoVisible;
  }

  handleLiveDemoChange(event: boolean) {
    this.liveDemoVisible = event;
  }
}
