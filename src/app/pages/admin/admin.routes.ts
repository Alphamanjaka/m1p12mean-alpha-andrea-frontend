// Copyright 2025 alpha
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from '../../templates/admin/dashboard/dashboard.component';
import { EmployeManagementComponent } from '../../templates/admin/employe-management/employe-management.component';
import { StockManagementComponent } from '../../templates/admin/stock-management/stock-management.component';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: AdminComponent,
  },
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'employee-mgmt',
    component: EmployeManagementComponent
  },
  {
    path: 'stock-mgmt',
    component: StockManagementComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];
