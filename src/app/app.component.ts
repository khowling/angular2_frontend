import { Component } from '@angular/core';
import {Profile} from './profile';
import {ProfileDataService} from './profile-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProfileDataService]
})
export class AppComponent {

  newProfile: Profile = new Profile();
  profiles: Profile[] = [];

  constructor(private profileDataService: ProfileDataService) {
  }

  ngOnInit(): void {
    this.getProfiles();
  }

  getProfiles(): Promise<Profile[]> {
    return this.profileDataService.getAllProfiles().then((profiles => this.profiles = profiles));
  }

  addProfile() {
    this.profileDataService.addProfile(this.newProfile).then((res) => {
      this.newProfile = new Profile();
      this.getProfiles()
    });
    
  }



}
