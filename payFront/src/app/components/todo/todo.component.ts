import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  list:String[] 
  newItemFormControl = new FormControl("")
  constructor(private todoService:TodoService) {
    this.todoService.getList().subscribe((res)=>{
      if (res[0].length)
      this.list= res[0]
      else
      {
        this.list= ["defualt 1","defualt 2", "defualt 3"]
      }

    } )  }


  ngOnInit() {
  }

  add( )
  {
    let text = this.newItemFormControl.value// binding with the text value 
    if (text)
    {
    this.list.push(text);// push it  in Front-End
    this.todoService.addItem(text).subscribe(res=>{
      console.log(res)// to make sure all is ok
    });  // add it in the data base
    this.newItemFormControl.setValue("") // clear the text box
    
  }
  }
  delete(index:number){
    this.list.splice(index,  1)// delete form front End
    this.todoService.deleteItem(index).subscribe(res=>{
      console.log(res)// to make sure all is ok
    });;// delete from back End
  }
}
