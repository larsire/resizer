import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resizer',
  templateUrl: './resizer.component.html',
  styleUrls: ['./resizer.component.scss']
})
export class ResizerComponent implements OnInit {
  @Input() file: File;
  top = 0;
  left = 0;
  constructor() { }

  ngOnInit() {
  }

  moveFile(ev) {
    ev.dataTransfer.setData('text', ev.target.id);
  }

  dragover(ev) {
    const img = document.getElementById('image');
    const top = ev.y - (img.clientHeight * 1.5);
    const left = ev.x - (img.clientWidth);
    
    this.top = top;
    this.left = left;
  }

  drop(ev) {
    console.log('drop');

    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
}
