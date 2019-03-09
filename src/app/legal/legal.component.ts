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
  "name": "Iran\nPunishable by Death",
  "title": "Punishable by Death",
  "fill": am4core.color("#8B0000")
}, {
  "id": "SA",
  "name": "Saudi Arabia\nPunishable by Death",
  "title": "Punishable by Death",
  "fill": am4core.color("#8B0000")
}, {
  "id": "SD",
  "name": "Sudan\nPunishable by Death",
  "title":"Punishable by Death",
  "fill": am4core.color("#8B0000")
}, {
  "id": "YE",
  "name": "Yemen\nPunishable by Death",
  "title": "Punishable by Death",
  "fill": am4core.color("#8B0000")
}, {
  "id": "SO",
  "name": "Somalia\nPunishable by Death in areas under Sharia Law",
  "title": "Punishable by Death in areas under Sharia Law",
  "fill": am4core.color("#8B0000")
}, {
  "id": "NG",
  "name": "Nigeria\nPunishable by Death in areas under Sharia Law",
  "title": "Punishable by Death in areas under Sharia Law",
  "fill": am4core.color("#8B0000")
}, {
  "id": "SY",
  "name": "Syrian Arab Republic\nPunishable by Death enforced by Insurgents",
  "title": "Punishable by Death enforced by Insurgents",
  "fill": am4core.color("#8B0000")
}, {
  "id": "IQ",
  "name": "Iraq\nPunishable by Death enforced by Insurgents",
  "title": "Punishable by Death enforced by Insurgents",
  "fill": am4core.color("#8B0000")
},
{
  "id": "DZ",
  "name":"Algeria\nUp to Two Years Imprisonment",
  "fill":am4core.color("#FF6347")
},
{
  "id": "AO",
  "name":"Angola\nUp to Three Years Internment",
  "fill":am4core.color("#FF6347")
},
{
  "id": "BW",
  "name":"Botswana\nUp to Five Years Internment",
  "fill":am4core.color("#FF4500")
},
{
  "id": "BI",
  "name":"Burundi\nUp to Two Years Internment",
  "fill":am4core.color("#FF6347")
},
{
  "id": "CM",
  "name":"Cameroon\nUp to Five Years Imprisonment",
  "fill":am4core.color("#FF4500")
},
{
  "id": "TZ",
  "name":"United Republic of Tanzania\nUp to Life Imprisonment",
  "fill":am4core.color("#FF0000")
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
