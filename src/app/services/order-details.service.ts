import { Injectable } from '@angular/core';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  foodDetails = [
    {
      id:1,
      foodName: "Contra Filé Grelhado",
      foodDetails: "Contrafilé em bife| Caldo de Carne Knorr| Dente de Alho| Azeite de Oliva| Sal",
      foodPrice: 150,
      foodImg: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id:2,
      foodName: "Hamburguer",
      foodDetails: "Pão| Carne| becon| Tomate| Cebola| Picles| Alface Queijo",
      foodPrice: 60,
      foodImg: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id:3,
      foodName: "Pizza",
      foodDetails: "Massa| Queijo| Tomate",
      foodPrice: 80,
      foodImg: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id:4,
      foodName: "Panqueca Americana",
      foodDetails: "Panqueca| Mel| Banana",
      foodPrice: 40,
      foodImg: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80"
    },
    {
      id:5,
      foodName: "Fatia De Bolo",
      foodDetails: "Cereja| Iorgute| Leite Condensado| Bolo Branco",
      foodPrice: 20,
      foodImg: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
    },
    {
      id:6,
      foodName: "Sorvete De Chocolate Com Oreo",
      foodDetails: "Sorverte de Chocolate| Chantilly| Biscoito de Oreo",
      foodPrice: 30,
      foodImg: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
    }
  ]

}
