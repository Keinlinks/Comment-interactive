import { Component } from '@angular/core';
import { ServicioService } from './servicio.service';
import { CurrentUser } from './Models/currentUser';
import { Comments } from './Models/comments';
import moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'InteractiveComment';

  constructor(private servicio: ServicioService) {
    servicio.getComentarios();
  }
  count: number = 4;
  new_comment: string = '';
  perfil: CurrentUser = this.servicio.getPerfil();
  data: any = this.servicio.getComentarios();

  add_comment() {
    if (this.new_comment == '') return;
    else {
      console.log(this.data);
      let datas: Comments = {
        content: this.new_comment,
        id: this.count + 1,
        createdAt:
          moment().format().slice(0, 10) + ' ' + moment().format('h:mm:ss a'),
        score: 0,
        user: {
          image: { png: this.perfil.image.png, webp: this.perfil.image.webp },
          username: this.perfil.username,
        },
      };

      this.data.push(datas);
      console.log(moment().format().slice(0, 10));
      this.count += 1;
    }
  }
}
