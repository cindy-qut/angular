import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TailleService } from '../../../service/taille.service';
import { Taille } from '../../../class/taille';

@Component({
  selector: 'app-taille-edit',
  templateUrl: './taille-edit.component.html',
  styleUrls: ['./taille-edit.component.scss']
})

export class TailleEditComponent implements OnInit {

  tailleForm: FormGroup;
  taille: Taille;
  loading: boolean;

  constructor(private fb: FormBuilder,
              private tailleService: TailleService,
              private router: Router,
              private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.loading = true;
    this.tailleForm = this.fb.group({
      dimensions : ['', Validators.required]
    });
    this.activatedRouter.params
    .subscribe((params) => {
      this.tailleService.getTaille(params.id)
      .subscribe((taille: Taille) => {
        this.createForm(taille);
        this.loading = false;
      });
    });
  }

  createForm(taille: Taille) {
    this.taille = taille;
    this.tailleForm.setValue({
      dimensions : taille.dimensions
    });
  }
  backClicked() {
    this.router.navigate(['/taille']);
  }

  saveTaille() {
    const val = this.tailleForm.value;
    this.tailleService.editTaille(this.taille.id, val.dimensions)
    .subscribe((taille: Taille) => {
      this.createForm(taille);
      this.backClicked();
    });
  }
}
