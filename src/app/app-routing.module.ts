import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AgentComponent } from './agent/agent.component';
import { LoginNewComponent } from './login-new/login-new.component';
import { UserDetailComponent } from './user-detail/user-detail.component';


const routes: Routes = [
  { path: 'Login', component:LoginNewComponent },
  { path: 'Admin', component:AdminComponent },
  { path: 'Agent', component:AgentComponent }, 
  // { path: 'Login/:id', component: LoginNewComponent },
{ path: 'detail/:id', component: UserDetailComponent },
  // { path: 'detail/:username', component: UserDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
