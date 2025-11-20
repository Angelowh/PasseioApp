import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LayoutProps } from './layoutProps';
import { filter, map } from 'rxjs';
import { AuthgoogleService } from '../../authgoogle.service';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {
  layoutProps: LayoutProps = { titulo: '', subTitulo: '' };

  constructor(private router: Router, private route: ActivatedRoute, private loginService: AuthgoogleService) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(() => this.route.firstChild !== null),
      map(() => this.setLayoutProps())
    )
    .subscribe((layoutProps: LayoutProps) => {
      this.layoutProps = layoutProps;
    });
  }

  setLayoutProps(): LayoutProps {
    let rotaFilha = this.route.firstChild;

    while (rotaFilha?.firstChild) {
      rotaFilha = rotaFilha.firstChild;
    }

    return rotaFilha?.snapshot.data as LayoutProps;
  }

  logout(): void {
    this.loginService.logout();
  }
}
