import {Component, inject, input, output, signal} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {User} from '../../../shared/interfaces/user.interface';
import { CommonModule, NgIf } from '@angular/common';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatOption, MatSelect} from '@angular/material/select';
import {UserService} from '../service/user.service';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-user-form',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatFormField,
    MatSelect,
    MatOption,
    RouterLink
  ],
  templateUrl: './user-form.component.html',
  standalone: true,
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {
  private userService = inject(UserService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  editMode = signal<boolean>(false);
  userId = signal<string>('')
  user = input<User | null>()
  save = output<User>();

  permissionsList = signal(['Read', 'Write', 'Delete', 'Execute']);


  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['user', Validators.required],
      permissions:['', Validators.required],
      active: [true]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const userId = params['id'];
      if(userId){
        this.editMode.set(true);
        this.userId.set(userId);
        this.loadUserDetails();
      }
    });
  }

  closeOrCancel():void{
    this.router.navigate(['/']);
  }


  private loadUserDetails(){
    this.userService.getUserById(this.userId()).subscribe(
      {
        next: (user) => {
          this.userForm.patchValue({
            name: user.name,
            email: user.email,
            role: user.role,
            permissions: user.permissions,
            active: user.active
          })
        },
        error: (error) => {
          console.error('Error creating user:', error);
        }
      }
    )
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const userData = this.userForm.value;

      if(this.editMode()){
        this.userService.updateUser(this.userId(), userData).subscribe({
          next: (user) => {
            this.router.navigate(['/users'])
          },
          error: (error) => {
            console.error('Error creating user:', error);
          }
        });
      }else{
        this.userService.createUser(userData).subscribe({
          next: (user) => {
            this.router.navigate(['/users'])
          },
          error: (error) => {
            console.error('Error creating user:', error);
          }
        });
      }

    }
  }

  protected readonly close = close;
}
