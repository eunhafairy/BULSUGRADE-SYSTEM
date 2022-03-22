import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {

roleArray : string[] = ['Student', 'Teacher'];
@Input() select_title!: string;

constructor() { }

  ngOnInit(): void {
  }

}
