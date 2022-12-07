import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { TodoComponent } from './pages/todo/todo.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'todos', component: TodoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [AuthComponent, TodoComponent],
  exports: [RouterModule],
})
export class AppRoutingModule {}
