import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

// Comprueba si el usuario está logueado
export const loggedUserGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);

  return loginService.isLogged();
};
