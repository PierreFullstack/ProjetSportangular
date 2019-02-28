import { MatButtonModule, MatCheckboxModule, MatFormFieldModule } from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import { NgModule } from '@angular/core';

@NgModule({
imports: [MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule],
exports: [MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule],
})
export class MaterialModule { }


