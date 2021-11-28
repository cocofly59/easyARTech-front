import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { TestService } from '@app/home/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;

  constructor(private testService: TestService) {}

  ngOnInit() {
    this.isLoading = true;
    this.testService
      .getTestValue()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((quote: string) => {
        this.quote = quote;
      });
  }
}
