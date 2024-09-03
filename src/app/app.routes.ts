import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoursesComponent } from './courses/courses.component';
import { ProfileComponent } from './profile/profile.component';
import { TasksComponent } from './tasks/tasks.component';
import { ProgressComponent } from './progress/progress.component';
import { ChildViewComponent } from './child-view/child-view.component';
import { ChildView1Component } from './child-view1/child-view1.component';
import { ChildView2Component } from './child-view2/child-view2.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'dashboard', component: DashboardComponent, data: { text: 'Dashboard' } },
  { path: 'courses', component: CoursesComponent, data: { text: 'Courses' } },
  { path: 'profile', component: ProfileComponent, data: { text: 'Profile' } },
  { path: 'tasks', component: TasksComponent, data: { text: 'Tasks' } },
  { path: 'progress', component: ProgressComponent, data: { text: 'Progress' } },
  { path: 'child-view', component: ChildViewComponent, data: { text: 'Child View' } },
  { path: 'child-view1', component: ChildView1Component, data: { text: 'Child View 1' } },
  { path: 'child-view2', component: ChildView2Component, data: { text: 'Child View 2' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
