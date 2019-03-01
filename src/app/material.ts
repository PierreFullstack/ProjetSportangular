import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatCardModule, MatInputModule, MatToolbarModule, MatRadioModule} from '@angular/material';
import { NgModule } from '@angular/core';



@NgModule({
imports: [MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatCardModule, MatInputModule, MatToolbarModule, MatRadioModule],
exports: [MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatCardModule, MatInputModule, MatToolbarModule, MatRadioModule],

})
export class MaterialModule { }


