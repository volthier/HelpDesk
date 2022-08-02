import {Component, OnInit, ViewChild} from '@angular/core';
import {SharedService} from "../../services/shared.service";
import {TicketService} from "../../services/ticket.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ResponseApi} from "../../model/response-api";
import {Ticket} from "../../model/ticket.model";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css']
})
export class TicketDetailComponent implements OnInit {

  @ViewChild('form', { static: true })
  form: NgForm;

  ticket = new Ticket(null,0,'','','','','',null,null,'',null);

  shared: SharedService;
  message: {};
  classCss: {};


  constructor(
    private ticketService: TicketService,
    private route: ActivatedRoute
  ) {
    this.shared = SharedService.getInstance();
  }

  ngOnInit() {
    let id:string = this.route.snapshot.params['id'];
    if (id !== undefined){
      this.findById(id);
    }
  }

  findById(id:string){
    this.ticketService.findById(id).subscribe((responseApi: ResponseApi) => {
      this.ticket = responseApi.data;
      this.ticket.date = new Date(this.ticket.date).toISOString();
    }, err => {
      this.showMessage({
        type: 'error',
        text: err['error']['errors'][0]
      });
    });
  }

  changeStatus(status:string): void {
    this.ticketService.changeStatus(status, this.ticket).subscribe((responseApi: ResponseApi) => {
      this.ticket = responseApi.data;
      this.ticket.date = new Date(this.ticket.date).toISOString();
      this.showMessage({
        type: 'success',
        text: 'Successfully changed status'
      });
    }, err => {
      this.showMessage({
        type: 'error',
        text: err['error']['errors'][0]
      });
    })
  }
  private showMessage(message: {type: string, text: string}) : void {
    this.message = message;
    this.buildClasses(message.type);
    setTimeout(() => {
      this.message = undefined;
    }, 3000);
  }

  private buildClasses(type: string): void {
    this.classCss = {
      'alert' : true
    };
    this.classCss['alert-'+type]= true
  }

  getFromGroupClass(isInvalid: boolean, isDirty: boolean): {} {
    return {
      'from-group': true,
      'has-error': isInvalid && isDirty,
      'has-success': !isInvalid && isDirty
    };
  }

  register(){
    this.message = '';
    this.ticketService.createOrUpdate(this.ticket).subscribe((responseApi: ResponseApi) => {
      this.ticket = new Ticket(null,0,'','','','','',null,null,'',null);
      let ticketRet: Ticket = responseApi.data;
      this.form.resetForm();
      this.showMessage({
        type: 'success',
        text: `Registered ${ticketRet.title} successfully!`
      })
    }, err => {
      this.showMessage({
        type: 'error',
        text: err['error']['errors'[0]]
      });
    });
  }

}
