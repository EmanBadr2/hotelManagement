import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsPageRoutingModule } from './details-page-routing.module';
import { DetailsPageComponent } from './details-page.component';
import { LandingModule } from '../../landing.module';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { ContentComponent } from './components/content/content.component';
import { RateCommentComponent } from './components/rate-comment/rate-comment.component';
import { DialogShowCommentsComponent } from './components/dialog-show-comments/dialog-show-comments.component';



@NgModule({
  declarations: [
    DetailsPageComponent,
    ContentComponent,
    RateCommentComponent,
    DialogShowCommentsComponent
  ],
  imports: [
    CommonModule,
    DetailsPageRoutingModule ,
    LandingModule ,
    SharedModule
  ]
})
export class DetailsPageModule { }
