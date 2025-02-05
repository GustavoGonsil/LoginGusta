import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ApiService } from '../../../dental-hub-api/api.service';
import { LoginComponent } from '../../../src/app/login.component';


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
