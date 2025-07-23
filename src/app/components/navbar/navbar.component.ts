import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { initFlowbite } from 'flowbite';



@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {

    if (isPlatformBrowser(this.platformId)) {
       import('flowbite').then((module) => {
         module.initFlowbite() ;
       });
     }
  }
}
