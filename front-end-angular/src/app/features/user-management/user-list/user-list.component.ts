import {Component, inject} from '@angular/core';
import {User} from '../../../shared/interfaces/user.interface';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {NgForOf} from '@angular/common';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-user-list',
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './user-list.component.html',
  standalone: true,
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  router = inject(Router);
  userService = inject(UserService);

  users: User[] = [];
  searchTerm = '';
  searchDebounce: any;

  // Pagination
  currentPage = 1;
  itemsPerPage = 10;
  totalItems = 0;
  totalPages = 0;

  get startIndex(): number {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  get endIndex(): number {
    return Math.min(this.startIndex + this.itemsPerPage, this.totalItems);
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsersPaginated({
      page: this.currentPage,
      limit: this.itemsPerPage,
      search: this.searchTerm
    }).subscribe({
      next: (response) => {
        this.users = response.items;
        this.totalItems = response.total;
        this.totalPages = response.totalPages;
      },
      error: (error) => {
        console.error('Error loading users:', error);
      }
    });
  }

  onSearch(value: string): void {
    if (this.searchDebounce) {
      clearTimeout(this.searchDebounce);
    }
    this.searchDebounce = setTimeout(() => {
      this.currentPage = 1; // Reset to first page when searching
      this.loadUsers();
    }, 300);
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadUsers();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadUsers();
    }
  }

  openAddUser(): void {
    this.router.navigate(['/users/add']);
  }

  editUser(user: User): void {
    this.router.navigate(['/users/edit', user.id]);
  }

  deleteUser(id?: string): void {
    const confirmDelete = confirm('Are you sure you want to delete this user?');
    if (confirmDelete && id) {
      this.userService.deleteUser(id).subscribe({
        next: () => {
          this.loadUsers();
        },
        error: (error) => {
          console.error('Error deleting user:', error);
        }
      });
    }
  }
}
