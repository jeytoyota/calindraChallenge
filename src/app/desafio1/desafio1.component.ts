import { Component, OnInit } from '@angular/core';
import { Desafio1Service } from '../service/desafio1.service';
import { Product } from './product';

@Component({
  selector: 'app-desafio1',
  templateUrl: './desafio1.component.html',
  styleUrls: ['./desafio1.component.css']
})
export class Desafio1Component implements OnInit {

  listProducts: any[]
  listNoFilter: any[]
  listAll: any[]
  word: any = null
  show: boolean = true

  constructor(
    private serviceD1: Desafio1Service
  ) { }

  ngOnInit() {
    this.getAllProducts()
  }

  getAllProducts() {
    this.serviceD1.getAllProducts().subscribe((resp) => {
      this.listAll = Object.values(resp)
      this.listProducts = this.listAll[0]
      this.listNoFilter = this.listAll[0]
    })
  }

  search() {
    this.show = false
    this.word = this.word.toString().toUpperCase();
    let words = this.word.split(' ');
    this.listProducts = this.listProducts.filter(a => {
      return words.reduce((result: any, word: any) => {
        return result && a.name.toString().toUpperCase().includes(word);
      }, true);
    }
    );
  }

  newSearch() {
    this.show = true
    this.listProducts = this.listNoFilter
    this.word = ""
  }

}
