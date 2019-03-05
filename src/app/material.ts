import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatCardModule, MatInputModule, MatToolbarModule, MatRadioModule, MatSelectModule, MatDatepickerModule, MatDialogModule, MatTableModule} from '@angular/material';
import { NgModule } from '@angular/core';



@NgModule({
imports: [MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatCardModule, MatInputModule, MatToolbarModule, MatRadioModule, MatSelectModule, MatDatepickerModule, MatDialogModule, MatTableModule],
exports: [MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatCardModule, MatInputModule, MatToolbarModule, MatRadioModule, MatSelectModule, MatDatepickerModule, MatDialogModule, MatTableModule],

})
export class MaterialModule { }


