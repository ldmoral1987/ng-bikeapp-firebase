import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

// Servicio de gestión de pedidos
export class OrderManagmentService {

  constructor() { }

  // Se crea el formulario de pedido
  form = new FormGroup({        
    customerId: new FormControl(''),
    customerName: new FormControl(''),
    orderNumber: new FormControl(''),
  })
}
