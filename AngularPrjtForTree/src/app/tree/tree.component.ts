import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { TreeNode } from './tree-node';
import {TreeService} from './treeService'

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  @Input()  treeData: TreeNode[]=[];
  static loadedIntial:string='not';
  loading: boolean = false;
  errorMessage
  constructor(private treeService: TreeService) {

    console.log(TreeComponent.loadedIntial)
    if(TreeComponent.loadedIntial!='Loaded'){
      this.getHardWareDetails();
      }
  }
  ngOnInit() {
   
  }

  toggleChild(node) {
    node.showChildren = !node.showChildren;
  }

  public getHardWareDetails() {
    console.log('inside this')
    TreeComponent.loadedIntial='Loaded'
    this.errorMessage = "";
    this.treeService.getHardWareDetails()
      .subscribe(
        (response) => {                           //next() callback
          console.log('response received'+response)
        
          console.log(response);
          var t='['+response+']';
          this.treeData.push(response);
          console.log(this.treeData);
          
        },
        (error) => {                              //error() callback
          console.error('Request failed with error')
          this.errorMessage = error;
          this.loading = false;
        },
        )
  }

}
