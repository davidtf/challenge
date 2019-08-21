import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule} from 'ng2-charts';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardTableComponent } from './dashboard/dashboard-table/dashboard-table.component';
import { DashboardTotalComponent } from './dashboard/dashboard-total/dashboard-total.component';
import { DashboardChartComponent } from './dashboard/dashboard-chart/dashboard-chart.component';


@NgModule({
  declarations: [DashboardComponent, DashboardTableComponent, DashboardTotalComponent, DashboardChartComponent],
  imports: [
    ChartsModule,
    CommonModule,
    DashboardRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
  ]
})
export class DashboardModule { }
