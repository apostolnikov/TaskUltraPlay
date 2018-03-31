import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Markets } from '../../interfaces/markets';
import { Match } from '../../interfaces/match';

@Component({
  selector: 'app-match-markets',
  templateUrl: './match-markets.component.html',
  styleUrls: ['./match-markets.component.css']
})
export class MatchMarketsComponent implements OnInit {
  
  selectedMatch: Match;
  markets: Markets[];

  constructor(private route: ActivatedRoute, private dataService:DataService) { }

  ngOnInit() {

    this.selectedMatch = this.dataService.selectedMatch;
  	
    const postBody = {
    matchIds: [
        this.selectedMatch.Id
      ]
    }

    //Get all markets from the data.sercice subscribe to it (observable) 
    this.dataService.getAllMarketsForSelectedMatch(postBody).subscribe((m) => {
  		this.markets = m;
  	});

  }

}
