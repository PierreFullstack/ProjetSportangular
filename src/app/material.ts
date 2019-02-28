<<<<<<< HEAD
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule } from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import { NgModule } from '@angular/core';

@NgModule({
imports: [MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule],
exports: [MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule],
=======
import { MatButtonModule, MatCheckboxModule, MatToolbarModule  } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule],
exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule],
>>>>>>> c6b16937a8db22e116bdf82825d9403584892927
})
export class MaterialModule { }


