import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonFooter, IonHeader, IonInput, IonItem, IonTitle, IonToolbar } from '@ionic/angular/standalone';
  @Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    standalone: true,
    imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonItem, IonButton, FormsModule, IonFooter],
  })

  export class HomePage {
    //Caso 1: Variable tipo Date
    fecha : string;
    

    //Caso 2:  Variable tipo number con dos cifras decimales
    numero: number = 3.141592653589793;

    //Caso 3: Variable para el input de nombre
    nombre: string = '';
    Nombre: string = '';


      // Caso 4: Método para incrementar un contador de 2 en 2
      contador: number = 0;

     
    constructor() {

      //caso1
      const Fecha = new Date(2024, 0, 26);
      this.fecha = Fecha.toLocaleDateString('en-US');
    }

      //caso2
      NumeroDecimal(numero: number): string {
        return numero.toFixed(2);
      }

      //cas3
      agregarNombre(){
        this.nombre = this.Nombre
      }
      
      // caso4
      incrementarContador() {
        this.contador += 2;
      }

  }
