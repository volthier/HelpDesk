import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {User} from "../../model/user.model";
import {SharedService} from "../../services/shared.service";
import {UserService} from "../../services/user.service";
import {ActivatedRoute} from "@angular/router";
import {ResponseApi} from "../../model/response-api";

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {

  @ViewChild('form')
  form: NgForm;

  user = new User(null,'','','');
  shared: SharedService;
  message: {};
  classCss: {};

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {
    this.shared = SharedService.getInstance();
  }

  ngOnInit() {
    let id: string = this.route.snapshot.params['id'];

    if (id != undefined){
      this.findById(id);
    }
  }

  findById(id:string){
    this.userService.findById(id).subscribe((responseApi: ResponseApi) => {
      this.user = responseApi.data;
      this.user.password = '';
    }, err => {
      this.showMessage({
        type: 'error',
        text: err['error']['errors'][0]
      });
    });
  }

  register(){
    this.message = '';
    this.userService.createOrUpdate(this.user).subscribe((responseApi: ResponseApi) => {
      console.info(responseApi);
      this.user = new User(null,'','','');
      let userRet: User = responseApi.data;
      this.form.resetForm();
      this.showMessage({
        type: 'success',
        text: `Registered ${userRet.email} successfully!`
      })
    }, err => {
      this.showMessage({
        type: 'error',
        text: err['error']['errors'[0]]
      });
    });
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

}
