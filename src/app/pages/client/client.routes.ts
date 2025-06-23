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
import { ClientComponent } from './client.component';
import { OfferListComponent } from '../../components/offer-list/offer-list.component';
import { ServiceListComponent } from '../../components/service-list/service-list.component';

export const CLIENT_ROUTES: Routes = [
  {
    path: '',
    component: ClientComponent,
  },
  {
    path: '', component: OfferListComponent
  },
  {
    path: 'services', component: ServiceListComponent
  },
  {
    path: 'offers', component: OfferListComponent
  }
];
