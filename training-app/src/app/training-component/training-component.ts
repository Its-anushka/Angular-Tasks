import { Component, Input } from '@angular/core';
import { Training } from './training'
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { isValidDate } from 'rxjs/internal/util/isDate';
import { Router } from '@angular/router';
import { TrainingService } from './training.service';
@Component({
  selector: 'app-training-component',
  imports: [FormsModule, CommonModule],
  templateUrl: './training-component.html',
  styleUrl: './training-component.css',
})

export class TrainingComponent {
  training: Training = {} as Training;
  venues: string[] = [
  'Conference Hall A',
  'Conference Hall B',
  'Training Room 1',
  'Training Room 2',
  'Auditorium',
  'Seminar Hall',
  'Lab 101',
  'Innovation Center',
  'Online (Zoom)',
  'Online (Teams)'
];


 constructor(public router: Router, private trainingService: TrainingService) {}

  ngOnInit() {
    this.trainings = this.trainingService.trainings; 
  }

isInvalidDate(){
  return this.training.startDate && this.training.endDate &&
  new Date(this.training.startDate) > new Date(this.training.endDate);
}


trainings: Training[] = []
  onSubmit(form: NgForm) {
    if (form.valid) {
      this.trainings.push({ ...this.training });  
      form.reset(); 
      alert("Training added successfully")                                  
      this.training = {} as Training;                
    }
  }
}
