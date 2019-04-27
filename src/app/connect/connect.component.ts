import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
interface Item{
  title: string;
  message: string;
};
@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {
  

  myForm: FormGroup;
    // Form state
    loading = false;
    success = false;
    public items: Observable<any[]>;
  constructor(private fb: FormBuilder, private afs: AngularFirestore) { }
  ngOnInit() {
    this.myForm = this.fb.group({
      title: ['', Validators.required],
      message:['', Validators.required]
    })
    //this.myForm.valueChanges.subscribe(console.log);
    const collection: AngularFirestoreCollection<Item> = this.afs.collection('posts');
    this.items = this.afs.collection('posts').valueChanges();
  }
  async submitHandler() {
    this.loading = true;
    
    const formValue = this.myForm.value;

    try {
      await this.afs.collection('posts').add(formValue);
      this.success = true;
    } catch(err) {
      console.error(err)
    }

    this.loading = false;
  }
  get title() {
    return this.myForm.get('title');
  }
  get message() {
    return this.myForm.get('message');
  }



}
