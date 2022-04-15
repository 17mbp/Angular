import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatIconModule, MatInputModule, MatFormFieldModule, MatButtonModule, 
  MatDialogModule, MatPaginatorModule, MatTooltipModule, MatSidenavModule,
  MatProgressSpinnerModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatSidenavModule 
  ],
  exports: [    
    MatProgressSpinnerModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatSidenavModule
  ],
  declarations: []
})
export class MaterialModule { }