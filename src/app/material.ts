import { MatButtonModule, MatCheckboxModule, MatToolbarModule  } from '@angular/material';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';


@NgModule({
imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule],
exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule],
})
export class MaterialModule { }