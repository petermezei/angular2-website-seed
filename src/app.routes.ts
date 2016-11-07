import { provideRouter, RouterConfig, RouterModule } from '@angular/router';

import { WelcomeComponent } from './app/home/index.component';
import { ProductRoutes }        from './app/products/product.routes';
import { NotFoundComponent } from './app/msg/404.component';
import { TauComponent } from './app/tau/tau.component';
import { CompanyRoutes } from './app/company/company.routes';
import { ApiRoutes } from './app/api/api.routes';
import { CommunityComponent } from './app/community/community.component';
import { SupportComponent } from './app/support/support.component';
import { LegalRoutes } from './app/legal/legal.routes';

export const routes: RouterConfig = [
  { path: '', component: WelcomeComponent },
  { path: '404', component: NotFoundComponent },
  { path: 'tau', component: TauComponent },
  ...ProductRoutes,
  ...CompanyRoutes,
  ...ApiRoutes,
  ...LegalRoutes,
  { path: 'community', component: CommunityComponent },
  { path: 'support', component: SupportComponent },
  { path: '**', redirectTo: '/404' }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];