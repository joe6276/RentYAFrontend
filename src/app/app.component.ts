import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { AuthService } from './Services/auth.service';
import { Store } from '@ngrx/store';
import { NgIf } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { PlaceHolderDirective } from './Directives/place-holder.directive';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [IonicModule, RouterLink, NgIf, RouterOutlet,ErrorComponentComponent,PlaceHolderDirective]
})
export class AppComponent {
  count!:number
  message:null|string =null
  sub!:Subscription
  @ViewChild(PlaceHolderDirective) errorHost!:PlaceHolderDirective
  constructor( public authService:AuthService,private store:Store<any> , 
    private componentFactory:ComponentFactoryResolver ){}
  ngOnInit(): void {
    this.store.select('counter').subscribe(values=>{
      this.count= values.count
    })
  }

  close(){
    this.message=null
  }
  showError(){
    this.message='A Network issue has occured'

    this.createComponent()
    setTimeout(()=>{
      this.destroyComp()
    },3000)
  }
  title = 'RentYAfrontend';
 

  createComponent(){
    const errorComponentFactory= this.componentFactory.resolveComponentFactory(ErrorComponentComponent)
    const hostContainer= this.errorHost.viewContainerRef
    hostContainer.clear()
    const componentRef=hostContainer.createComponent(errorComponentFactory)
    componentRef.instance.message=this.message?this.message:'An Error Occurred'
    this.sub=componentRef.instance.close.subscribe(()=>{
      hostContainer.clear()
      this.sub.unsubscribe()
    })

  }

  
  destroyComp(){
    const hostContainer= this.errorHost.viewContainerRef
    hostContainer.clear()
  }
}
