import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Get()
  getProducts() {
    return this.productService.getAllProducts();
  }
  @Get(':price')
  getProductByPrice(@Param('price') price: string) {
    return this.productService.getProductByPrice(Number(price));
  }
}
