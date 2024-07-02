import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  standalone: true,
  imports: [NgClass],
  templateUrl: './password-strength.component.html',
  styleUrl: './password-strength.component.css'
})
export class PasswordStrengthComponent {
  inputValue: string = '';
  firstIndicator: string = 'gray';
  secondIndicator: string = 'gray';
  thirdIndicator: string = 'gray';

  onInputChamge(event: Event) {
    const alphanumericSymbols =
      /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/;
    const combination =
      /(?=.*[a-z])(?=.*[A-Z])|(?=.*[0-9])|(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    const lsnRegex = /^(?=.*[a-zA-Z])(?=.*[\W_])(?=.*\d).+$/;

    const target = event.target as HTMLInputElement;
    this.inputValue = target.value;

    if (
      this.inputValue.length >= 8 &&
      alphanumericSymbols.test(this.inputValue)
    ) {
      this.setIndicators('red', 'gray', 'gray');
    }
    if (this.inputValue.length >= 8 && combination.test(this.inputValue)) {
      this.setIndicators('yellow', 'yellow', 'gray');
    }
    if (this.inputValue.length >= 8 && lsnRegex.test(this.inputValue)) {
      this.setIndicators('green', 'green', 'green');
    }

    if (this.inputValue.length < 8) {
      this.setIndicators('red', 'red', 'red');
    }
    if (this.inputValue.length === 0) {
      this.setIndicators('gray', 'gray', 'gray');
    }
  }
  private setIndicators(first: string, second: string, third: string) {
    this.firstIndicator = first;
    this.secondIndicator = second;
    this.thirdIndicator = third;
  }

}
