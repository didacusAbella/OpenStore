import { Injectable } from "@angular/core";
import { BaseService } from '../baseservice';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Genre } from '../models/genre';
import { Locale } from '../models/locale';

@Injectable()
export class UserService extends BaseService {

  constructor(protected client: HttpClient) {
    super(client, "users");
  }

  public getAllUsers(): Observable<User> {
    return this.client.get<User>(this.rootEndpoint);
  }

  public updateUser(user: User): Observable<boolean> {
    return this.client.put<boolean>(`${this.rootEndpoint}/user/${user.email}`, user, { headers: this.authHeaders });
  } 

  public deleteUser(email: string): Observable<boolean> {
    return this.client.delete<boolean>(`${this.rootEndpoint}/user/${email}`);
  }

  public findUser(email: string): Observable<User> {
    return this.client.get<User>(`${this.rootEndpoint}/user/${email}`, { headers: this.authHeaders });
  }

  public getFriends(userEmail: string): Observable<User[]>{
    return this.client.get<User[]>(`${this.rootEndpoint}/user_friends/${userEmail}`, { headers: this.authHeaders });
  }

  public addFriend(userEmail: string, friendEmail: string): Observable<boolean> {
    return this.client.post<boolean>(`${this.rootEndpoint}/user_friends/${userEmail}`, {email: friendEmail}, { headers: this.authHeaders });
  }

  public removeFriend(userEmail: string, friendEmail: string): Observable<boolean> {
    return this.client.delete<boolean>(`${this.rootEndpoint}/user_friends/${userEmail}/${friendEmail}`, { headers: this.authHeaders });
  }

  public getUserGenres(email: string): Observable<Genre[]> {
    return this.client.get<Genre[]>(`${this.rootEndpoint}/user_genres/${email}`, { headers: this.authHeaders });
  }

  public addUserGenre(email :string, genre: Genre): Observable<boolean> {
    return this.client.post<boolean>(`${this.rootEndpoint}/user_genres/${email}`, genre, { headers: this.authHeaders });
  }

  public removeUserGenre(email: string, genreName: string): Observable<boolean> {
    return this.client.delete<boolean>(`${this.rootEndpoint}/user_genres/${email}/${genreName}`, { headers: this.authHeaders });
  }

  public getUserLocales(email: string): Observable<Locale[]> {
    return this.client.get<Locale[]>(`${this.rootEndpoint}/user_locales/${email}`);
  }

  public addUserLocale(email: string, locale: Locale): Observable<boolean> {
    return this.client.post<boolean>(`${this.rootEndpoint}/user_locales/${email}`, locale);
  }

  public removeUserLocale(email: string, localeName: string): Observable<boolean> {
    return this.client.delete<boolean>(`${this.rootEndpoint}/user_locales/${email}/${localeName}`);
  }

  public friendsCommonSameCity(email: string): Observable<any[]> {
    return this.client.get<any[]>(`${this.rootEndpoint}/recom_friends/${email}`, { headers: this.authHeaders});
  }

  public friendsShareGenres(email: string): Observable<Genre[]> {
    return this.client.get<Genre[]>(`${this.rootEndpoint}/recom_genres/${email}`, { headers: this.authHeaders });
  }

  public showEvents(email: string): Observable<any[]> {
    return this.client.get<any[]>(`${this.rootEndpoint}/recom_events/${email}`, { headers: this.authHeaders });
  }

}