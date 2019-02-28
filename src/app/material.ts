import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatCardModule, MatInputModule, MatToolbarModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
imports: [MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatCardModule, MatInputModule, MatToolbarModule],
exports: [MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatCardModule, MatInputModule, MatToolbarModule],

})
export class MaterialModule { }


