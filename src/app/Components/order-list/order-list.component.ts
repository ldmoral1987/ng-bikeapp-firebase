import { Component, OnInit } from '@angular/core';
import { OrderManagementService } from "../../Services/order-managment.service";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  // Esta variable contendrá todos los pedidos de bicicletas
  bikeOrders;
  // Se inyecta la dependencia (el servicio) en el constructor
  constructor(private ordersService:OrderManagementService) { }

  ngOnInit(): void {
    this.getBikeOrders();
  }

  // Se cargan los pedidos de bicicletas
  getBikeOrders()
  {
      this.ordersService
      .getBikeOrders()
      .subscribe(res =>(this.bikeOrders = res));
  }

  // Esta función actualiza un pedido completado
  markCompleted = data => 
  this.ordersService.updateBikeOrder(data);

  // Esta función borra un pedido
  deleteOrder = data => this.ordersService.deleteBikeOrder(data);
}
