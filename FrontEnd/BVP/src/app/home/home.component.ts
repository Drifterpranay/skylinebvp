import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  openModal(){
    const modalDiv = document.getElementById("myModal");
    if(modalDiv != null){
      modalDiv.style.display = 'block';
    }
  }

  closeModal(){
    const modalDiv = document.getElementById('myModal');
    if(modalDiv != null){
      modalDiv.style.display = 'none';
    }
  }
}
