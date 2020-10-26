import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

// Servicio de gestión de pedidos
export class OrderManagmentService {

  // Se inyecta el servicio de Firestore (almacenamiento)
  constructor( private firestore: AngularFirestore ) { }

  // Se crea el formulario de pedido
  form = new FormGroup({        
    customerId: new FormControl(''),
    customerName: new FormControl(''),
    orderNumber: new FormControl(''),
    bikeOrder: new FormControl('')
  })

  // Crea un pedido de bicicletas
  createBikeOrder(data) {
    return new Promise<any>((resolve, reject) =>{
        this.firestore
            .collection("bikeOrders")
            .add(data)
            .then(res => {}, err => reject(err));
    });
  }
}
