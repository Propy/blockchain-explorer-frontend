import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {PlatformType} from '../../shared/enums/platform-type.enum';
import {DeedService} from '../../shared/deed.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  platformTypeEnum: any;

  addressOrHashForm = this.fb.group({
      addressOrHash: ['', Validators.required],
      platformType: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private router: Router) {
      this.platformTypeEnum = PlatformType;
  }

  ngOnInit() {
  }

  submit = async () => {
      this.router.navigate(['/transaction', this.platformTypeModel.value, this.addressOrHashModel.value], {
          queryParams: {refresh: new Date().getTime()}
      });
   }

  get addressOrHashModel() {
      return this.addressOrHashForm.get('addressOrHash');
  }

  get platformTypeModel() {
      return this.addressOrHashForm.get('platformType');
  }

}
