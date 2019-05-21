import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TailleService } from '../../../service/taille.service';

@Component({
  selector: 'app-taille-add',
  templateUrl: './taille-add.component.html',
  styleUrls: ['./taille-add.component.scss']
})

export class TailleAddComponent implements OnInit {
  public tailleForm: FormGroup;
  constructor(private fb: FormBuilder, private tailleService: TailleService, private router: Router) { }

  ngOnInit() {
    this.tailleForm = this.fb.group({
      dimensions : ['', Validators.required ]
    });
  }
  createTaille() {
    const val = this.tailleForm.value;
    this.tailleService.createTaille(val.dimensions).subscribe(() => {
      this.router.navigate(['/taille/']);
    });
  }
  backclicked() {
    this.router.navigate(['/taille/']);
  }
}
