import { Injectable } from '@angular/core';
import {
  alphanumericSymbols,
  combination,
  lsnRegex,
} from '../constants/app-password';

@Injectable({
  providedIn: 'root',
})
export class PasswordStrengthService {
  constructor() {}

  public checkPasswordStrength(password: string): string {
    if (password.length === 0) {
      return 'empty';
    }
    if (password.length < 8) {
      return 'not enough';
    }
    if (password.length >= 8) {
      if (alphanumericSymbols.test(password)) {
        return 'easy';
      } else if (combination.test(password)) {
        return 'medium';
      } else if (lsnRegex.test(password)) {
        return 'strong';
      }
    }
    return 'invalid';
  }
}
