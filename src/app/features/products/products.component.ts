import { Component } from '@angular/core';
import { CardComponent } from "./card/card.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardComponent],
  template: `
  <section class="text-gray-600 body-font" >
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4" >

      <app-card class=" w-full p-4 lg:w-1/4 md:w-1/2" />
      <!-- <app-card class=" w-full p-4 lg:w-1/4 md:w-1/2" /> -->
    </div>

  </div>
</section>
  `
})
export default class ProductsComponent {

}
