import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

// Servicio de gestión de pedidos
export class OrderManagementService {

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

  // Devuelve información sobre todos los pedidos de bicicletas
  getBikeOrders() { 
    return this.firestore.collection("bikeOrders").snapshotChanges();
  }

  // Actualiza un pedido (lo marca como completado)
  // Cuando se ejecuta la función, el pedido se oculta
  // gracias al atributo hidden
  updateBikeOrder(data) {
    return this.firestore
        .collection("bikeOrders")
        .doc(data.payload.doc.id)
        .set({ completed: true }, { merge: true });
 }

 // Borra un pedido de la colección
 deleteBikeOrder(data) {
  return this.firestore
      .collection("bikeOrders")
      .doc(data.payload.doc.id)
      .delete();
}
}
