import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewFeaturePageModule } from './pages/new-feature.page-module';

const routes: Routes = [{ 
        path: 'new-feature', 
        loadChildren: () => NewFeaturePageModule
      }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
