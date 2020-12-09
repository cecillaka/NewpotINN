import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate: { title: string; url: string; icon: string; }[];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }




  sideMenu()
  {
    this.navigate =
    [
      {
        title : "Photos",
        url   : "/home/photos",
        icon  : "images"
      },
      {
        title : "Videos",
        url   : "/home/videos",
        icon  : "videocam"
      },
      {
        title : "Documents",
        url   : "/home/documents",
        icon  : "document"
      },

      {
        title : "Music",
        url   : "/home/music",
        icon  : "musical-notes"
      },
      {
        title : "Books",
        url   : "/home/books",
        icon  : "book"
      },

      {
        title : "Other Files",
        url   : "/home/other",
        icon  : "folder"
      },
    ];
  }




}
