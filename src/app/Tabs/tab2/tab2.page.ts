import { Component, OnInit } from '@angular/core';

interface Tareas {
  nombre: string;
  completada: boolean;
}

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  nuevaTarea: string='';
  tarea: Tareas[]=[];
  constructor() { }

  AgregarTarea(){
    if (this.nuevaTarea.trim().length > 0) {
      this.tarea.push({ nombre: this.nuevaTarea, completada: false });
      this.nuevaTarea = '';
    }
  }

  EliminarTarea(tarea: Tareas) {
    this.tarea = this.tarea.filter(t => t !== tarea);
  }

  ngOnInit() {
  }

}
