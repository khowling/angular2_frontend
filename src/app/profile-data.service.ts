import { Injectable } from '@angular/core';
import {Profile} from './profile'
import {Http} from "@angular/http";
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProfileDataService {

  constructor(private http: Http) { }

  getAllProfiles(): Promise<Profile[]> {
    return this.http.get('http://localhost:8080/profiles').toPromise().then((res) => <Profile[]>res.json()._embedded.profiles)
  }

  addProfile(profile: Profile): Promise<Profile> {
    return this.http.post ('http://localhost:8080/profiles', profile).toPromise().then((res) => <Profile>res.json())

  }


}
