import { Component } from '@angular/core';
import { DataService } from '../../data.service';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-national-vs-international',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './national-vs-international.component.html',
  styleUrl: './national-vs-international.component.css'
})
export class NationalVsInternationalComponent {
  data: any;
  constructor(private dataService: DataService, private location: Location) {}
  ngOnInit(): void {
    this.loadNationalVsInternational();
  }

  loadNationalVsInternational(): void {
    this.dataService.loadData().subscribe((data) => {
      this.data = this.dataService.getNationalVsInternational(data);
    });
  }

  goBack(): void {
    this.location.back();
  }
}
