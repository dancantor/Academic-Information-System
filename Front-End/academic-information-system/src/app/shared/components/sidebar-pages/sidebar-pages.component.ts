import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-pages',
  templateUrl: './sidebar-pages.component.html',
  styleUrls: ['./sidebar-pages.component.scss']
})
export class SidebarPagesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  returnToMainPage(): void {
    this.router.navigate(['/student']);
  }
}
