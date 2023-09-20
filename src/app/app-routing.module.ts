import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { IndividualScoresComponent } from './individual-scores/individual-scores.component';
import { RankingsComponent } from './rankings/rankings.component';
import { ScoresComponent } from './scores/scores.component';

const routes: Routes = [
  { path: 'announcements', component: AnnouncementsComponent },
  { path: 'individual-scores', component: IndividualScoresComponent },
  { path: 'rankings', component: RankingsComponent },
  { path: 'scores', component: ScoresComponent },
  { path: '', redirectTo: '/announcements', pathMatch: 'full' },  // Redirect to `page1` by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
