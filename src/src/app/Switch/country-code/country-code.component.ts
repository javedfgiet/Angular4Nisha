import { Component } from '@angular/core';

@Component({
  selector: 'app-code',
  standalone: false,

  templateUrl: './country-code.component.html',
  styles: ``
})
export class CountryCodeComponent {
  countries: any[] = [
    { code: 'ind', country: 'India' },
    { code: 'uk', country: 'United Kingdom' },
    { code: 'uae', country: 'United Arab Amirate' }

  ];

  selectedCountry: string = "";
  choice(code: string) {
    this.selectedCountry = code

  }

}
