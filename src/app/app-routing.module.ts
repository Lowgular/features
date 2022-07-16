import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewFeaturePageModule } from './pages/new-feature.page-module';
import { HomePageModule } from './pages/home.page-module';

const routes: Routes = [{ 
        path: 'new-feature', 
        loadChildren: () => NewFeaturePageModule
      },
  { 
        path: '', 
        loadChildren: () => HomePageModule
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
