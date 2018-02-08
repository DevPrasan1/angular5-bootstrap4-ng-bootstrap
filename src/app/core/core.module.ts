import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ZillowService, InterceptorService } from './services';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    ZillowService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
})
export class CoreModule {}
