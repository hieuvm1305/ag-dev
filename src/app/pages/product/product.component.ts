import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { MockService } from '../../service/mock_service';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  constructor(
    private mock_service: MockService
  ){}
  ngOnInit(): void {
    this.mock_service.getProduct().subscribe(data => {
      console.log(data)
    })
  }
}
