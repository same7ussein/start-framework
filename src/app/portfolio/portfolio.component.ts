import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  flag: boolean = false;
  imgSrc:string = ''
  
  openModal(element?:any) {
    this.flag = true
    // console.log(element.target.closest(".portfolio__card .inner"));
    
    this.imgSrc = element.target.closest(".portfolio__card .inner").children[0].getAttribute('src')
    // .parentElement.children[0].getAttribute('src')
    

  }

  closeModal (element:any){
    if (element.target.classList[0] == "modall") {
      this.flag = false
    };
    
  }

}
