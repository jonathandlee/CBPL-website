import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {
  announcements = [
    { title: "Cornell SUCKS", date: "2023-09-20", content: "I hate this school so much" },
    { title: "Shoutout Chris4life", date: "2023-09-21", content: "He's so dreamy..." },
    // add more announcements here
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
