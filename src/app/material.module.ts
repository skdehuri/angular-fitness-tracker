import { NgModule } from '@angular/core';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule,
    MatSidenavModule, MatToolbarModule, MatListModule, MatTabsModule,
    MatCardModule, MatSelectModule, MatProgressSpinnerModule, MatDialogModule } from '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatFormFieldModule, MatInputModule,
        MatIconModule, MatSidenavModule, MatToolbarModule, MatListModule, MatTabsModule,
        MatCardModule, MatSelectModule, MatProgressSpinnerModule, MatDialogModule],
    exports: [MatButtonModule, MatFormFieldModule, MatInputModule,
        MatIconModule, MatSidenavModule, MatToolbarModule, MatListModule, MatTabsModule,
        MatCardModule, MatSelectModule, MatProgressSpinnerModule, MatDialogModule]
})
export class MaterialModule { }
