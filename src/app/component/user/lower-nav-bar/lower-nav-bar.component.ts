import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/service/localstorage/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lower-nav-bar',
  templateUrl: './lower-nav-bar.component.html',
  styleUrls: ['./lower-nav-bar.component.css']
})
export class LowerNavBarComponent implements OnInit {
  readonly logo = 'assets/img/logo.png';

  userId: number;

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit() { this.localStorageService.userIdBehaviourSubject.subscribe(userId => this.userId = userId); }

}