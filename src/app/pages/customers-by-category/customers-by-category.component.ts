import { Component } from '@angular/core';
import { DataService } from '../../data.service';
import { CommonModule, Location } from '@angular/common';

@Component({
  standalone: true,
  imports:[CommonModule],
  selector: 'app-customers-by-category',
  templateUrl: './customers-by-category.component.html',
  styleUrls: ['./customers-by-category.component.css'],
})
export class CustomersByCategoryComponent {
  data: any;

  constructor(private dataService: DataService, private location: Location) {}

  ngOnInit(): void {
    this.dataService.loadData().subscribe((data) => {
      this.data = this.dataService.getCustomersByCategoryInQ2(data);
    });
  }

  goBack(): void {
    this.location.back();
  }
}
