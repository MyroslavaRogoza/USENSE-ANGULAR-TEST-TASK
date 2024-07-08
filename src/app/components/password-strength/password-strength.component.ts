import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { PasswordStrengthService } from '../../services/password-strength.service';
import { CustomInputComponent } from '../custom-input/custom-input.component';

@Component({
  selector: 'app-password-strength',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule, CustomInputComponent],
  templateUrl: './password-strength.component.html',
  styleUrl: './password-strength.component.css',
})
export class PasswordStrengthComponent {
  inputValue: string = '';
  firstIndicator: string = 'gray';
  secondIndicator: string = 'gray';
  thirdIndicator: string = 'gray';

  public form: FormGroup = new FormGroup({
    password: new FormControl(''),
  });
  private setIndicators(
    firstColor: string,
    secondColor: string,
    thirdColor: string
  ) {
    this.firstIndicator = firstColor;
    this.secondIndicator = secondColor;
    this.thirdIndicator = thirdColor;
  }
  constructor(private passwordStrength: PasswordStrengthService) {
    this.form.valueChanges.subscribe((value) => {
      this.onInputChange(value.password);
    });
  }

  private onInputChange(inputValue: string) {
    let strength = this.passwordStrength.checkPasswordStrength(inputValue);
    console.log(strength);

    switch (strength) {
      case 'easy':
        this.setIndicators('red', 'gray', 'gray');
        break;
      case 'medium':
        this.setIndicators('yellow', 'yellow', 'gray');
        break;
      case 'strong':
        this.setIndicators('green', 'green', 'green');
        break;
      case 'not enough':
        this.setIndicators('red', 'red', 'red');
        break;
      case 'empty':
        this.setIndicators('gray', 'gray', 'gray');
        break;
      default:
        this.setIndicators('gray', 'gray', 'gray');
        break;
    }
  }
}
