import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import  snarkdown  from 'snarkdown'
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
  public convertMarkdownToHtml(markdown: string): SafeHtml {
    return this.domSanitizer.bypassSecurityTrustHtml(snarkdown(markdown))
  }
  ngOnInit(): void {
  }

  public onClickTabButton (tabName: EditorTabName):void{
    this.selectedTabName = tabName
  }
 
  public onChange(markdownValue: string): void {
  }
  public onChangeEditorValue(newValue: string): void {
    this.editorValue = newValue
    this.onChange(newValue)
  }
  public writeValue(markdown: string): void {
    if (markdown === null) {
      return
    }

    this.editorValue = markdown
  }
}
