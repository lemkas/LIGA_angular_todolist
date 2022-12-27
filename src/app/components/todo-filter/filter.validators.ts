import { FormControl } from '@angular/forms';

export class FilterValidators {
  forbiddenWords(control: FormControl): Promise<any> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (control.value === 'cunt') {
          resolve({
            forbiddenWord: true,
          });
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }
}
