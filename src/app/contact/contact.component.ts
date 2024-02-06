import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  label:boolean = false

  showLabel(event:any){   
    if (event.target.value != '') {
      console.log();
      
      this.label = true
      event.target.closest('.form__card').children[0].classList.add('label__show')
    }else {
      this.label = false
      event.target.closest('.form__card').children[0].classList.remove('label__show')
    }
  }
}
