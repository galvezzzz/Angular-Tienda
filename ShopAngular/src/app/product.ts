export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    stock: number;
  }
  
  export const products = [
    {
      id: 1,
      name: 'Phone XL',
      price: 799,
      description: 'A large phone with one of the best screens',
      stock: 10,
      caracteristicas: ["5G", "Pantalla OLED", "Almacenamiento de 128GB"],
      garantia:{
        periodo: "2 años",
        tipo: "Fabricante"
      }
    },
    {
      id: 2,
      name: 'Phone Mini',
      price: 699,
      description: 'A great phone with one of the best cameras',
      stock: 3,
      caracteristicas: ["2G", "Pantalla HD", "Almacenamiento de 64GB"],
      garantia:{
        periodo: "5 años",
        tipo: "Importado"
      }
    },
    {
      id: 3,
      name: 'Phone Standard',
      price: 299,
      description: '',
      stock: 0,
      caracteristicas: ["7G", "Pantalla 4k", "Almacenamiento de 256GB"],
      garantia:{
        periodo: "3 años",
        tipo: "Entregado"
      }
    }
  ];
  
  
  /*
  Copyright Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at https://angular.io/license
  */