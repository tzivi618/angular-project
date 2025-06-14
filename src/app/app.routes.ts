import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

import { ParticipantComponent } from './components/participant/participant.component';
import { LessonsComponent } from './components/lessons/lessons.component';
import { InvalidPageComponent } from './components/invalid-page/invalid-page.component';
import { teacherGuard } from './gruads/teacher.guard';
import { secretaryGuard } from './gruads/secretary.guard';


export const routes: Routes = [
    { path: '', component: LoginComponent },
    {path: 'login', component: LoginComponent},
    {path:'participant',component:ParticipantComponent, canActivate:[secretaryGuard]},
    {path:'lessons',component:LessonsComponent, canActivate:[teacherGuard]},
    {path:'**',component:InvalidPageComponent},
];
