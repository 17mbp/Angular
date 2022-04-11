import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatIconModule, MatInputModule, MatFormFieldModule, MatButtonModule, 
  MatDialogModule, MatPaginatorModule, MatTooltipModule, MatSidenavModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
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