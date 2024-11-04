// app.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule, NgIf],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  reversedText: string = '';
  inputText: string = '';

  reverse() {
    fetch('http://localhost:8080/api/text/reverse', {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: this.inputText,
    })
      .then((response) => response.text())
      .then((result) => {
        this.reversedText = result;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
}
