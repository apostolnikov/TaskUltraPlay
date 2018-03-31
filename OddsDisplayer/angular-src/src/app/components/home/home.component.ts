import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Match } from '../../interfaces/match';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  matches: Match[];

  constructor(private dataService:DataService, private router: Router) { }

  ngOnInit() {

    //Get all matches from the data.sercice subscribe to it (observable) and store it as an array of Match
  	this.dataService.getAllMatchesAvailable().subscribe((m) => {
  		this.matches = m;
  	});
  }

  //Get data from the view for the selected match... and pass it to the DataService
  showAllMarkets(selectedMatch:Match) {
    this.dataService.storeChosenMatchData(selectedMatch);
    this.router.navigate(['/match']);
    
  }

}