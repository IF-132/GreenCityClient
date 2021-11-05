import { Component, OnInit } from '@angular/core';
import { ubsHeaderIcons } from '../../main/image-pathes/header-icons';

@Component({
  selector: 'app-ubs-footer',
  templateUrl: './ubs-footer.component.html',
  styleUrls: ['./ubs-footer.component.scss']
})
export class UbsFooterComponent implements OnInit {
  public footerPicture = ubsHeaderIcons.ubsAdminLogo;
  public inputValue;

  constructor() {}

  ngOnInit(): void {}
}
