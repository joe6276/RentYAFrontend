import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { LandLord } from '../Interfaces';
import { LandordService } from '../Services/landord.service';
import { AdminService } from '../Services/admin.service';

@Component({
  selector: 'app-landlords',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landlords.component.html',
  styleUrls: ['./landlords.component.css']
})
export class LandlordsComponent {
  unapprovedLandlord!:Observable<LandLord[]>
  approvedLandlord!:Observable<LandLord[]>
  constructor(private landlordService:LandordService, private adminService:AdminService){}

  ngOnInit(): void {
    this.unapprovedLandlord= this.landlordService.getUnapprovedLandlords()
    this.approvedLandlord= this.landlordService.getapprovedLandlords()
  }

  deleteLandlord(id:string){
      this.landlordService.deleteLandLord(id).subscribe()
  }
  onApprove(id:string){
    this.adminService.approveLandLord(id).subscribe()    
    }
}
