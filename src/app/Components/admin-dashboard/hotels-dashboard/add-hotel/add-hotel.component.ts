import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ihotel } from '../../../../models/Hotel/Ihotel';
import { Router } from '@angular/router';
import { HotelService } from '../../../../services/hotel.service';

@Component({
  selector: 'app-add-hotel',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent {
  hotel: Ihotel = {
    id: 0,
    name: '',
    description: '',
    rating: 0,
    phoneNumber: '',
    email: '',
    websiteURL: '',
    latitude: 0,
    longitude: 0
  };

  constructor(private router: Router, private hotelService: HotelService) { }

  onSubmit() {
    this.hotelService.addHotel(this.hotel).subscribe(
      {
        next : (res) => {
        console.log(this.hotel);
        console.log(res);
        this.router.navigate(['/dashboard/hotelsDashboard']);
          },
        error: (error) => {
          console.error('Error adding hotel:', error);
        }
      }
    );
  }

  back(): void {
    this.router.navigate(['/dashboard/hotelsDashboard']);
  }
}
