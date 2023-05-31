import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { InteceptorService } from './Services/inteceptor.service';
import { StoreModule } from '@ngrx/store';
import { paragraphReducer } from './State/Reducers/paragraphReducer';
import { counterReducer } from './State/Reducers/counterReducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { propertyReducer } from './State/Reducers/propertyReducer';
import { PropertyEffects } from './State/Effects/PropertyEffects';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    HttpClientModule,
    StoreModule.forRoot({paragraph:paragraphReducer, counter:counterReducer, property:propertyReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([PropertyEffects])
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:InteceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
