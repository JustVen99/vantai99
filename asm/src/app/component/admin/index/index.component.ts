import { Component,EventEmitter, Output } from '@angular/core';
import { DuLieuService } from '../../../service/du-lieu.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  @Output() currenpage = new EventEmitter<number>();
  constructor(private d:DuLieuService){}
listsp:any= [];
totalpage = 0;
itemsPerpage = 5;
pageCurrent = 1;
arr:any = []
ngOnInit() {
  this.loadData();
}

onPageChange(pagenumber:number){
  this.pageCurrent = pagenumber;
  this.currenpage.emit(this.pageCurrent);
}

getPageArray(pages: number): number[] {
  return Array.from({ length: pages }, (_, index) => index + 1);
}

loadData(){
  this.d.laySP().subscribe(data=>{
    this.listsp = data;
    this.totalpage = Math.ceil(this.listsp.length / this.itemsPerpage);
    this.arr = this.getPageArray(this.totalpage);
  })
}
}
