import { Component, OnInit } from '@angular/core';
import { OrderManagmentService } from '../../Services/order-managment.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  // Se declara un Array con los tipos de bicicletas de la tienda
  // Esto podría hacerse o bien en el servicio o recuperarse
  // desde la base de datos, pero lo ponemos como un vector para
  // simplificar la aplicación
  bikeModels = ["Summum", "Summum R", "Summum RR", "PRIME +", "PRIME 29", "FOXY R"];
  
  // Este vector almacena las bicicletas incluidas en el pedido
  bikeOrder = []; 

  // Se inyecta el servicio de gestión en el constructor
  // del componente usando el atributo de clase orderService
  constructor(public orderService:OrderManagmentService) { }

  ngOnInit(): void {
  }

  // Añade una bicicleta al pedido
  addBike (bike)
  {
    this.bikeOrder.push(bike);
  }

  // Borra una bicicleta del pedido
  removeBike (bike)
  {
    let index = this.bikeOrder.indexOf(bike);

    if (index > -1) 
      this.bikeOrder.splice(index, 1);
  }

  // Procesa el formulario
  onSubmit ()
  {
    
  }
}
