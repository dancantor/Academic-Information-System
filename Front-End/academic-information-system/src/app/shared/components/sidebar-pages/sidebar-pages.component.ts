import { StorageService } from 'src/app/shared/services/storage.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-pages',
  templateUrl: './sidebar-pages.component.html',
  styleUrls: ['./sidebar-pages.component.scss']
})
export class SidebarPagesComponent implements OnInit {

  constructor(private router: Router, private storage: StorageService) { }

  ngOnInit(): void {
  }

  returnToMainPage(): void {
    this.router.navigate([`/${this.storage.getUserType()}`]);
  }
}
