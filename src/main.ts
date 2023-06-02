import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { AppComponent } from './app/app.component';
import { UserEffects } from './app/State/Effects/UserEffects';
import { PropertyEffects } from './app/State/Effects/PropertyEffects';
import { EffectsModule } from '@ngrx/effects';
import { isDevMode, importProvidersFrom } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { userReducers } from './app/State/Reducers/userReducer';
import { propertyReducer } from './app/State/Reducers/propertyReducer';
import { counterReducer } from './app/State/Reducers/counterReducer';
import { paragraphReducer } from './app/State/Reducers/paragraphReducer';
import { StoreModule } from '@ngrx/store';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app/app-routing.module';
import { RouterModule } from '@angular/router';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { InteceptorService } from './app/Services/inteceptor.service';
import { HTTP_INTERCEPTORS, withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { LandLordEffects } from './app/State/Effects/LandLordEffects';
import { landLordReducer } from './app/State/Reducers/landlordReducer';


bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule,
             RouterModule, AppRoutingModule, ReactiveFormsModule, 
             IonicModule.forRoot(), StoreModule.forRoot({ paragraph: paragraphReducer, counter: counterReducer, property: propertyReducer, user: userReducers ,landlord:landLordReducer}),
             StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
             EffectsModule.forRoot([PropertyEffects, UserEffects,LandLordEffects])),
        { provide: HTTP_INTERCEPTORS, useClass: InteceptorService, multi: true },
        provideHttpClient(withInterceptorsFromDi())
    ]
})
  .catch(err => console.error(err));
