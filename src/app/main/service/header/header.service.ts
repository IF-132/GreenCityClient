import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  public selectedIndex = null;

  public ubsNavLinks = [
    { name: 'Про нас', route: '/ubs', url: false },
    { name: 'Правила сортування', route: 'https://nowaste.com.ua/yak-sortyvaty-na-karantuni/', url: true },
    { name: 'Еко-магазин', route: 'https://shop.nowaste.com.ua/', url: true },
    { name: 'Green City', route: '/', url: false }
  ];

  public navLinks = [
    { name: 'user.lower-nav-bar.eco-events', route: '/news', url: false },
    { name: 'user.lower-nav-bar.tips', route: '/tips', url: false },
    { name: 'user.lower-nav-bar.map', route: '/places', url: false },
    { name: 'user.lower-nav-bar.about-us', route: '/about', url: false },
    { name: 'user.lower-nav-bar.my-habits', route: '/profile', url: false },
    { name: 'user.lower-nav-bar.ubs', route: '/ubs', url: false }
  ];

  public ubsArrLang = [
    { lang: 'Ua', langName: 'ukrainian' },
    { lang: 'En', langName: 'english' }
  ];

  public gCArrLang = [
    { lang: 'Ua', langName: 'ukrainian' },
    { lang: 'En', langName: 'english' },
    { lang: 'Ru', langName: 'russian' }
  ];

  constructor() {}

  getSelectedIndex() {
    return this.selectedIndex;
  }

  setSelectedIndex(num: number) {
    this.selectedIndex = num;
  }

  getNavLinks(value: boolean) {
    return value ? this.ubsNavLinks : this.navLinks;
  }

  getArrayLang(value: boolean) {
    return value ? this.ubsArrLang : this.gCArrLang;
  }
}
