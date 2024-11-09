// import { Products } from '@shared/models/product.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  template: `
  <div
  class="p-4 mt-2 mb-6 overflow-hidden rounded-b-lg shadow-md hover:shadow-xl bg-gray-100"
  >
  <a class="relative block h-48 overflow-hidden rounded">
    <img
      class="w-full transition duration-500 transform hover:scale-105"
      src="product.name"
      alt="product.name">
  </a>

  <div class="mt-4" >
        <h3 class="mb-1 text-xs tracking-widest text-gray-500 title-font" >
          Product category

        </h3>
        <h2 class="text-lg font-medium text-gray-900 title-font" >
          <a> Product name</a>
        </h2>
    </div>
  </div>

  `
})
export class CardComponent {

}
