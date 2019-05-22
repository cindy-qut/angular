import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Taille } from '../../class/taille';
import { TailleService } from '../../service/taille.service';

@Component({
  selector: 'app-taille',
  templateUrl: './taille.component.html',
  styleUrls: ['./taille.component.scss']
})
export class TailleComponent implements OnInit {
  error: boolean;
  tailles: Taille[];
  loading: boolean;

  constructor(private tailleService: TailleService, private router: Router) { }

  ngOnInit() {
    this.getAllTailles();
  }
  getAllTailles() {
  this.tailleService.getAllTailles()
  .subscribe((data: Taille[]) => {
    this.tailles = data;
  });
  }

  deleteTaille(id: number) {
    this.loading = true;
    this.tailleService.deleteTaille(id)
    .subscribe(() => {
      this.getAllTailles();
    });
  }

  createTaille() {
    this.router.navigate(['taille/add']);
  }
}
