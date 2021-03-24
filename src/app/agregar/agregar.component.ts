import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  formularioCreado!:FormGroup;
  //inyeccion de dependencias
  constructor( private formBuilder: FormBuilder){
      
  }

  ngOnInit(): void {//llamar al metodo para crear el formulario
    this.crearFormulario();
  }

  //metodo para crear el formulario reactivo
  crearFormulario(){
    //usar: formBuilder para crear el formulario
    this.formularioCreado = this.formBuilder.group({
       nombre: ['John', Validators.required],
       correo: ['', Validators.compose([Validators.required, Validators.email])],
       contraséña: ['', Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
    });
  }

  agregar(){
    //obtener los valores ingresados en los controles <input>
    console.log(this.crearFormulario);
  }

}