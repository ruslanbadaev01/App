import { Component, forwardRef, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
type EditorTabName = "RAW" | "RESULT"

@Component({
  selector: 'mn-md-edit',
  templateUrl: './md-edit.component.html',
  styleUrls: ['./md-edit.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MdEditComponent),
      multi: true
    }
  ]
})
export class MdEditComponent implements OnInit {
  public selectedTabName:EditorTabName = "RAW"
  public isDisabled:boolean = false
  public editorValue: string = ''
  
  constructor(private domSanitizer: DomSanitizer) { }
  // public convertMarkdownToHtml(markdown: string): SafeHtml {
  //   return this.domSanitizer.bypassSecurityTrustHtml(sharkdown(markdown))
  // }
  ngOnInit(): void {
  }

  public onClickTabButton (tabName: EditorTabName):void{
    this.selectedTabName = tabName
  }
  public setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled
  }
  public writeValue(markdown: string): void {
    this.editorValue = markdown
  }
}
