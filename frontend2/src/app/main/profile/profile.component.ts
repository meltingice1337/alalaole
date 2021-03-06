import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Router } from '@angular/router';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { LoginUser } from '../../shared/models/User';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    @ViewChild('search')
    public searchElementRef: ElementRef;
    @ViewChild(AgmMap)
    public agmMap: AgmMap;
    initialLocation = {
        longitude: 21.226788,
        latitude: 45.760696
    };
    currentUser: LoginUser;
    constructor(
        private mapsAPILoader: MapsAPILoader,
        public router: Router,
    ) { }

    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem('user'));
        this.mapsAPILoader.load().then(() => {
            const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
            autocomplete.addListener('place_changed', () => {
                const place: google.maps.places.PlaceResult = autocomplete.getPlace();
                if (place.geometry === undefined || place.geometry === null) {
                    return;
                }
                this.initialLocation.latitude = place.geometry.location.lat();
                this.initialLocation.longitude = place.geometry.location.lng();
                this.agmMap.triggerResize();
                // console.log(this.agmMarker.longitude);
            });
        });
    }

}
