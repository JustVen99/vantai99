import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet,ActivatedRoute } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule,RouterOutlet,SidebarComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  constructor(private route: ActivatedRoute) {
    
  }
  ngOnInit() {
    const routeSnapshot = this.route.snapshot;
    console.log(routeSnapshot);
  }
}

