import { Component, OnInit } from '@angular/core';
import {Ticket} from "../../model/ticket.model";
import {DialogService} from "../../dialog.service";
import {TicketService} from "../../services/ticket.service";
import {SharedService} from "../../services/shared.service";
import {ResponseApi} from "../../model/response-api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  shared: SharedService;
  assignedToMe: boolean = true;
  page: number = 0;
  count: number = 5;
  pages: Array< number>;
  message: {};
  classCss: {};
  listTicket = [];
  ticketFilter = new Ticket('',0,'','','','','',null,null,'',null);

  constructor(
    private dialogService: DialogService,
    private ticketService: TicketService,
    private route: Router
  ) {
    this.shared = SharedService.getInstance();
  }

  ngOnInit() {
    this.findAll(this.page, this.count);
  }

  findAll(page: number, count: number) {
    this.ticketService.findAll(page,count).subscribe((responseApi: ResponseApi) => {
      this.listTicket = responseApi['data']['content'];
      this.pages = new Array(responseApi['data']['totalPages']);
    }, err => {
      this.showMessage({
        type: 'error',
        text: err['error']['errors'[0]]
      });
    });
  }

  filter(): void{
    this.page = 0;
    this.count = 5;
    this.ticketService.findByParams(this.page, this.count, this.ticketFilter, this.assignedToMe)
      .subscribe((responseApi: ResponseApi) => {
          this.ticketFilter.title = this.ticketFilter.title === 'uninformed' ? '' : this.ticketFilter.title;
          this.ticketFilter.number = this.ticketFilter.number ==  0 ? null : this.ticketFilter.number;
          this.listTicket = responseApi['data']['content'];
        this.pages = new Array(responseApi['data']['totalPages']);
      }, err => {
        this.showMessage({
          type: 'error',
          text: err['error']['errors'[0]]
        });
    });
  }

  cleanFilter(){
    this.assignedToMe = false;
    this.page = 0;
    this.count = 5;
    this.ticketFilter = new Ticket('',0,'','','','','',null,null,'',null);
    this.findAll(this.page, this.count);
  }

  edit(id: string){
    this.route.navigate(['/ticket-new', id]);
  }

  detail(id: string) {
    this.route.navigate(['/ticket-detail', id]);

  }

  delete(id: string) {
    this.dialogService.confirm('Do you wanna delete the ticket?').then((canDelete: Boolean) => {
      if (canDelete) {
        this.message ={};
        this.ticketService.delete(id).subscribe((responseApi: ResponseApi) => {
          this.showMessage({
            type: 'Success',
            text: 'Record Deleted!'
          });
          this.findAll(this.page,this.count);
        }, err => {
          this.showMessage({
            type: 'error',
            text: err['error']['errors'[0]]
          });
        })
      }
    })
  }

  setNextPage(event: any) {
    event.preventDefault();
    if(this.page+1 < this.pages.length ) {
      ++this.page;
      this.findAll(this.page, this.count);
    }
  }

  setPreviusPage(event: any) {
    event.preventDefault();
    if(this.page > 0) {
      --this.page;
      this.findAll(this.page, this.count);
    }
  }

  setPage(num: number, event: any) {
    event.preventDefault();
    this.page = num;
    this.findAll(this.page, this.count);
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
}
