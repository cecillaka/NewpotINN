import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeGuard } from '../guards/home.guard';
import { UserDataResolver } from '../resolvers/user-data.resolver';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    canActivate: [HomeGuard],
    resolve: {
      userData: UserDataResolver
    },
    children: [
      {
        path: 'feed',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/feed/feed.module').then(m => m.FeedPageModule)
          }
        ]
      },



      {
        path: 'photos',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/photos/photos.module').then(m => m.PhotosPageModule)
          }
        ]
      }
,

{
  path: 'videos',
  children: [
    {
      path: '',
      loadChildren: () =>
        import('../pages/videos/videos.module').then(m => m.VideosPageModule)
    }
  ]
}
,
{
  path: 'documents',
  children: [
    {
      path: '',
      loadChildren: () =>
        import('../pages/documents/documents.module').then(m => m.DocumentsPageModule)
    }
  ]
}


,

{
  path: 'other',
  children: [
    {
      path: '',
      loadChildren: () =>
        import('../pages/other/other.module').then(m => m.OtherPageModule)
    }
  ]
}
,
{
  path: 'music',
  children: [
    {
      path: '',
      loadChildren: () =>
        import('../pages/music/music.module').then(m => m.MusicPageModule)
    }
  ]
}
,
{
  path: 'profile',
  children: [
    {
      path: '',
      loadChildren: () =>
        import('../pages/profile/profile.module').then(m => m.ProfilePageModule)
    }
  ]
}
,

{
  path: 'storage',
  children: [
    {
      path: '',
      loadChildren: () =>
        import('../pages/storage/storage.module').then(m => m.StoragePageModule)
    }
  ]
}
,

{
  path: 'about',
  children: [
    {
      path: '',
      loadChildren: () =>
        import('../pages/about/about.module').then(m => m.AboutPageModule)
    }
  ]
}

,
      {
        path: 'messages',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/messages/messages.module').then(
                m => m.MessagesPageModule
              )
          }
        ]
      },
      {
        path: 'notifications',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/notifications/notifications.module').then(
                m => m.NotificationsPageModule
              )
          }
        ]
      },



      {
        path: 'books',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/books/books.module').then(
                m => m.BooksPageModule
              )
          }
        ]
      },


      {
        path: 'settings',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/settings/settings.module').then(
                m => m.SettingsPageModule
              )
          }
        ]
      },
      {
        path: '',
        redirectTo: '/home/about',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRouter {}
