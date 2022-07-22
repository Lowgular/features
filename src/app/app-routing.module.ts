import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './pages/home.page-module';
import { EditFeaturePageModule } from './pages/edit-feature.page-module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => HomePageModule,
  },
  { 
        path: 'edit-feature/:featureId', 
        loadChildren: () => EditFeaturePageModule
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
