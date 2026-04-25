import { Injectable } from "@angular/core";
import { Training } from "./training";

@Injectable({ providedIn: 'root' })
export class TrainingService {
  trainings: Training[] = [];

  addTraining(t: Training) {
    this.trainings.push({ ...t });
  }
}