import { Component, OnInit } from '@angular/core';
import { ChartTypeRegistry } from 'chart.js';
import { ChartService } from './chart.service';
import { StatsData } from '../../models/chart';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bookingChartData: any;
  userChartData: any;
  bookingChartOptions: any;
  userChartOptions: any;
  statsData: StatsData | null = null;
  chartType: keyof ChartTypeRegistry = 'doughnut';
  userChartType: keyof ChartTypeRegistry = 'polarArea';

  constructor(private _ChartService: ChartService,) {}

  ngOnInit(): void {
    this._ChartService.getStats().subscribe(res => {
      this.statsData = res.data;
    });
    
    this._ChartService.chartService().subscribe(res => {
      const pending = res.data.bookings.pending;
      const completed = res.data.bookings.completed;
      const users = res.data.users;

      this.bookingChartData = {
        labels: ['Pending', 'Completed'],
        datasets: [
          {
            data: [pending, completed],
            backgroundColor: ['#5368F0', '#9D57D5'],
            hoverBackgroundColor: ['#3049eb', '#9148cb'],
            borderWidth: 2
          }
        ],
      };
      this.bookingChartOptions = {
        responsive: true,
        plugins: {
          legend: {
            position: 'right',
            labels: {
              color: 'black'
            }
          }
        }
      };

      this.userChartData = {
        labels: ['User', 'Admin'],
        datasets: [
          {
            label: 'Users Distribution',
            data: [users.user, users.admin],
            backgroundColor: ['#54D14D', '#35C2FD'],
            borderColor: ['#54D14D', '#35C2FD'],
            borderWidth: 1
          }
        ],
      };
      this.userChartOptions = {
        responsive: true,
        plugins: {
          legend: {
            position: 'right',
            labels: {
              color: 'black'
            }
          }
        }
      };
    });
  }
}
