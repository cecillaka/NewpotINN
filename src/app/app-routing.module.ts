import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./index/index.module').then(m => m.IndexPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { path: 'landing', loadChildren: './pages/landing/landing.module#LandingPageModule' },
  { path: 'photos', loadChildren: './pages/photos/photos.module#PhotosPageModule' },
  { path: 'videos', loadChildren: './pages/videos/videos.module#VideosPageModule' },
  { path: 'documents', loadChildren: './pages/documents/documents.module#DocumentsPageModule' },
  { path: 'other', loadChildren: './pages/other/other.module#OtherPageModule' },
  { path: 'music', loadChildren: './pages/music/music.module#MusicPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'storage', loadChildren: './pages/storage/storage.module#StoragePageModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: 'upload-modal', loadChildren: './upload-modal/upload-modal.module#UploadModalPageModule' },
  { path: 'preview-modal', loadChildren: './preview-modal/preview-modal.module#PreviewModalPageModule' },
  // { path: 'books', loadChildren: './books/books.module#BooksPageModule' },
  { path: 'books', loadChildren: './pages/books/books.module#BooksPageModule' }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
