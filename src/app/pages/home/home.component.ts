import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {PlatformType} from '../../shared/enums/platform-type.enum';

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

  constructor(private fb: FormBuilder) {
      this.platformTypeEnum = PlatformType;
  }

  ngOnInit() {
  }

  submit = () => {
      console.log(this.addressOrHashForm.value);
  }

  get addressOrHashModel() {
      return this.addressOrHashForm.get('addressOrHash');
  }

  get platformTypeModel() {
      return this.addressOrHashForm.get('platformType');
  }

}
