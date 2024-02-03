import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getDataSourceToken } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.init();

  const dataSource = app.get<DataSource>(getDataSourceToken());

  dataSource.synchronize(true);

  const productRepository = dataSource.getRepository('Product');
  await productRepository.insert([
    {
      id: '7f8c9d8e-9f0a-1b2c-3d4e-5f6g7h8i9j0k',
      name: 'Golang T-Shirt',
      description: 'High-quality Golang-themed T-Shirt',
      price: 25.99,
      image_url: 'http://localhost:9000/products/golang_tshirt.png',
    },
    {
      id: '66805003-f9a2-4772-b577-d5ff66207707',
      name: 'Golang Cap',
      description: 'Stylish Golang-themed Cap',
      price: 19.99,
      image_url: 'http://localhost:9000/products/golang_cap.png',
    },
    {
      id: '121829b9-e9f9-4ca9-bd14-b087afedd587',
      name: 'Golang Pen Set',
      description: 'Set of Golang-themed Pens',
      price: 12.99,
      image_url: 'http://localhost:9000/products/golang_pens.png',
    },
    {
      id: 'ef3d9a49-4c73-4192-97dd-55e21c0e2707',
      name: 'Golang Sticker Pack',
      description: 'Collection of Golang-themed Stickers',
      price: 8.99,
      image_url: 'http://localhost:9000/products/golang_stickers.png',
    },
    {
      id: '6d602b3a-1e72-4b03-a29c-14095e57027b',
      name: 'Golang Mug',
      description: 'Coffee mug with Golang logo',
      price: 15.99,
      image_url: 'http://localhost:9000/products/golang_mug.png',
    },
    {
      id: 'dad6f8fb-3149-4d0b-861e-03d29c6accf0',
      name: 'Golang Laptop Sticker',
      description: 'Durable laptop sticker with Golang branding',
      price: 5.99,
      image_url: 'http://localhost:9000/products/golang_laptop_sticker.png',
    },
    {
      id: '61c176d5-f4f9-4fbd-a892-41058422868e',
      name: 'Golang Keychain',
      description: 'Keychain featuring the Golang gopher',
      price: 7.99,
      image_url: 'http://localhost:9000/products/golang_keychain.png',
    },
    {
      id: 'ed394062-14bc-4ff2-bf43-a77473322171',
      name: 'Golang Socks',
      description: 'Comfortable socks with Golang design',
      price: 9.99,
      image_url: 'http://localhost:9000/products/golang_socks.png',
    },
    {
      id: '4e6d8a64-5389-4623-ad40-e3f95b0607f7',
      name: 'Golang Water Bottle',
      description: 'Reusable water bottle with Golang theme',
      price: 14.99,
      image_url: 'http://localhost:9000/products/golang_water_bottle.png',
    },
    {
      id: '924e4979-f471-4a3f-bf52-d3316485c06c',
      name: 'Golang Mouse Pad',
      description: 'Mouse pad featuring Golang artwork',
      price: 6.99,
      image_url: 'http://localhost:9000/products/golang_mouse_pad.png',
    },
  ]);

  await app.close();
}
bootstrap();
