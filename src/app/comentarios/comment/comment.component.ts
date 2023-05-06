import { Component, OnInit, Input } from '@angular/core';
import { Comments } from 'src/app/Models/comments';
import { Reply } from 'src/app/Models/reply';
import { ServicioService } from 'src/app/servicio.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  currentUser!:string
  @Input() comentario!:Comments;
  @Input() reply!:Reply

  constructor(private servicio:ServicioService) {
    this.currentUser= servicio.getUser()
  }
  ngOnInit(): void {
  }
prueba(){
  console.log(this.reply)
}
}