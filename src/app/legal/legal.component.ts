import { Component , OnInit, NgZone} from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4geodata_usaLow from "@amcharts/amcharts4-geodata/usaLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.css']
})
export class LegalComponent implements OnInit {

  private chart: am4maps.MapChart;

  constructor(private zone: NgZone) {}

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      am4core.useTheme(am4themes_animated);
      let chart = am4core.create("chartdiv", am4maps.MapChart);

      chart.geodata = am4geodata_worldLow;
      chart.projection = new am4maps.projections.Miller();

// Series for World map
let worldSeries = chart.series.push(new am4maps.MapPolygonSeries());
worldSeries.exclude = ["AQ"];
worldSeries.useGeodata = true;
worldSeries.data = [{
  "id": "IR",
  "name": "Iran",
  "value": 100,
  "fill": am4core.color("#8B0000")
}, {
  "id": "SA",
  "name": "Saudi Arabia",
  "value": 50,
  "fill": am4core.color("#8B0000")
}, {
  "id": "SD",
  "name": "Sudan",
  "value": 50,
  "fill": am4core.color("#8B0000")
}, {
  "id": "YE",
  "name": "Yemen",
  "value": 50,
  "fill": am4core.color("#8B0000")
}, {
  "id": "SO",
  "name": "Somalia",
  "value": 50,
  "fill": am4core.color("#8B0000")
}, {
  "id": "NG",
  "name": "Nigeria",
  "value": 50,
  "fill": am4core.color("#8B0000")
}, {
  "id": "SY",
  "name": "Syrian Arab Republic",
  "value": 50,
  "fill": am4core.color("#8B0000")
}, {
  "id": "IQ",
  "name": "Iraq",
  "value": 50,
  "fill": am4core.color("#8B0000")
}];


let polygonTemplate = worldSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}";
polygonTemplate.fill = chart.colors.getIndex(0);
polygonTemplate.nonScalingStroke = true;
polygonTemplate.propertyFields.fill = "fill";
// Hover state
let hs = polygonTemplate.states.create("hover");
hs.properties.fill = am4core.color("#555555");

this.chart = chart;

    });
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }

  ngOnInit() {
  }

}
