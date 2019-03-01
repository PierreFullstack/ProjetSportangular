import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatCardModule, MatInputModule, MatToolbarModule, MatRadioModule, MatSelectModule, MatDatepickerModule} from '@angular/material';
import { NgModule } from '@angular/core';



@NgModule({
imports: [MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatCardModule, MatInputModule, MatToolbarModule, MatRadioModule, MatSelectModule, MatDatepickerModule],
exports: [MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatCardModule, MatInputModule, MatToolbarModule, MatRadioModule, MatSelectModule, MatDatepickerModule],

})
export class MaterialModule { }


