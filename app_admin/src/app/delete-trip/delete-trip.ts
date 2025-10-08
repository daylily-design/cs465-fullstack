import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TripData } from '../services/trip-data';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-delete-trip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-trip.html',
  styleUrl: './delete-trip.css'
})
export class DeleteTrip implements OnInit {
  trip!: Trip;
  message: string = '';
  submitted = false;

  constructor(private router: Router, private tripService: TripData) { }

  ngOnInit() : void {
    // Retrieve stashed trip ID
    let tripCode = localStorage.getItem('tripCode');
    if (!tripCode) {
      alert("Something went wrong, I couldn't find where I stashed tripCode!");
      this.router.navigate(['']);
      return;
    }

    console.log('DeleteTripComponent::ngOnInit');
    console.log('tripCode: ' + tripCode);


    this.tripService.getTrip(tripCode).subscribe({
      next: (value: any) => {
        if (value && value.length > 0) {
          this.trip = value[0];
          //this.message = 'Trip: ' + tripCode + ' retrieved.';
        } else {
          this.message = 'No trip retrieved!';
        }
        console.log(this.message);
      },
      error: (error: any) => {
        console.log('Error: ' + error);
      }
  });
}

  public onSubmit(): void {
    this.submitted = true;

    const tripCode = this.trip.code;
    if (confirm(`Are you sure you want to delete trip ${tripCode}?`)) {
      this.tripService.deleteTrip(this.trip).subscribe({
        next: (value: any) => {
          console.log('Trip deleted: ' + value);
          this.router.navigate(['']);
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }
      });
    }
  }
}
