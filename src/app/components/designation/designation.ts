import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Master } from '../../services/master'; 
import { APIResponseModel, IDesignation } from '../../model/interface/role';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.html',
  styleUrls: ['./designation.css'],
  standalone: true,
  imports: [CommonModule]
})
export class Designation implements OnInit {
onEdit(_t18: IDesignation) {
throw new Error('Method not implemented.');
}
onViewDetails(_t18: IDesignation) {
throw new Error('Method not implemented.');
}

  designationList: IDesignation[] = [];
  isLoader: boolean = true;
  master = inject(Master);

  ngOnInit(): void {
    this.master.getDesignations().subscribe(
      (result: APIResponseModel) => {
        console.log('API result:', result);  // 🔹 Check console for data
       console.log(result);
console.log(result.data);

        this.designationList = result.data || [];
        this.isLoader = false;
      },
      (error) => {
        console.error('API error:', error);
        this.isLoader = false;
        alert('API error/network error');
      }
    );
  }
}
