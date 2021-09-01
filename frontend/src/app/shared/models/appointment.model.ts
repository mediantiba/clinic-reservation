import { Doctor } from './doctor.model';
import { User } from './user.model';

export class Appointment {
  _id!: string;
  user_id!: string;
  doctor_id!: string;
  date!: string;
  time!: string;

  doctor?: Doctor;
  user?: User;
}
