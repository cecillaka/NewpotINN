import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { Camera } from '@ionic-native/camera';
import {  FormsModule , ReactiveFormsModule} from '@angular/forms';
import { File } from '@ionic-native/File/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { ServicesAuthInterceptorsService } from './services/services-auth-interceptors.service';
// import { IonicStorageModule } from '@ionic/storage';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    // IonicStorageModule.forRoot()
     ReactiveFormsModule , FormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClientModule,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // Camera,
    // File,
    PreviewAnyFile,
    VideoPlayer,
    WebView,
    FilePath
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
