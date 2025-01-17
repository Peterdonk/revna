import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from '../../../shared/interfaces/user.interface';
import {environment} from '../../../../environment/development.environment';
import {PaginationParams} from '../../../shared/interfaces/pagination-params';
import {PaginatedResponse} from '../../../shared/interfaces/paginated-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = `${environment.apiUrl}/users`;

  constructor(private http: HttpClient) {}

  /**
   * Get all users
   */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  /**
   * Get users with pagination and search
   */
  getUsersPaginated(params: PaginationParams): Observable<PaginatedResponse<User>> {
    const { page = 1, limit = 10, search = '' } = params;
    const queryParams = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString())
      .set('search', search);

    return this.http.get<PaginatedResponse<User>>(this.apiUrl, { params: queryParams });
  }

  /**
   * Get a single user by ID
   */
  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  /**
   * Create a new user
   */
  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  /**
   * Update an existing user
   */
  updateUser(id: string, user: Partial<User>): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${id}`, user);
  }

  /**
   * Delete a user
   */
  deleteUser(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
