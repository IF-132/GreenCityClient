import { LanguageService } from 'src/app/main/i18n/language.service';
import { EcoPlaces } from '@global-user/models/ecoPlaces.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CardModel } from '@global-user/models/card.model';
import { ShoppingList } from '@global-user/models/shoppinglist.model';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '@global-service/localstorage/local-storage.service';
import { ProfileStatistics } from '@global-user/models/profile-statistiscs';
import { EditProfileModel } from '@global-user/models/edit-profile.model';
import { UserFriendsInterface } from '../../../../../interface/user/user-friends.interface';
import { mainLink, mainUserLink } from '../../../../../links';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  public userId: number;

  constructor(private http: HttpClient, private localStorageService: LocalStorageService, private languageService: LanguageService) {}

  public setUserId(): void {
    this.localStorageService.userIdBehaviourSubject.subscribe((userId) => (this.userId = userId));
  }

  public getFactsOfTheDay(): Observable<CardModel> {
    const currentLang = this.languageService.getCurrentLanguage();

    return this.http.get<CardModel>(`${mainLink}factoftheday/?lang=${currentLang}`);
  }

  public getUserInfo(): Observable<EditProfileModel> {
    this.setUserId();
    return this.http.get<EditProfileModel>(`${mainUserLink}user/${this.userId}/profile/`);
  }

  public getShoppingList(): Observable<ShoppingList[]> {
    const currentLang = this.languageService.getCurrentLanguage();
    this.setUserId();
    return this.http.get<ShoppingList[]>(`
    ${mainLink}custom/shopping-list-items/${this.userId}/custom-shopping-list-items?lang=${currentLang}
    `);
  }

  public getUserProfileStatistics(): Observable<ProfileStatistics> {
    this.setUserId();
    return this.http.get<ProfileStatistics>(`${mainUserLink}user/${this.userId}/profileStatistics/`);
  }

  public getEcoPlaces(): Observable<EcoPlaces[]> {
    return this.http.get<EcoPlaces[]>(`${mainLink}favorite_place/`);
  }

  public getUserFriends(): Observable<UserFriendsInterface> {
    this.setUserId();
    return this.http.get<UserFriendsInterface>(`${mainUserLink}user/${this.userId}/sixUserFriends/`);
  }

  public toggleStatusOfShoppingItem(item): Observable<object[]> {
    this.setUserId();
    const body = {};
    const { status: prevStatus } = item;
    const newStatus = prevStatus === 'DONE' ? 'ACTIVE' : 'DONE';
    return this.http.patch<object[]>(
      `
    ${mainLink}custom/shopping-list-items/${this.userId}/custom-shopping-list-items?itemId=${item.id}&status=${newStatus}`,
      body
    );
  }
}