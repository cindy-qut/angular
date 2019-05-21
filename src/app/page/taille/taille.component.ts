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
  tailles: Taille[];
  constructor(private tailleService: TailleService, private router: Router) { }

  ngOnInit() {
    this.getAllTailles();
  }
  getAllTailles(): void {
  this.tailleService.getAllTailles().subscribe(data => {
    this.tailles = data;
  });
  }

  deleteTaille(id: number) {
    this.tailleService.deleteTaille(id).subscribe(data => {
      this.getAllTailles();
    });
  }

  createTaille() {
    this.router.navigate(['/taille/add']);
  }
}
