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
const lifecolor = "#FF0000";
worldSeries.data = [

  //Start LAC//
  {
    "id": "AG",
    "name": "Antigua and Barbuda\nUp to 15 Years Imprisonment",
    "fill": am4core.color("#ff4747")
  },
  {
    "id": "BB",
    "name": "Barbados\nUp to Life Imprisonment",
    "fill":am4core.color("#FF0000")
  },
  {
    "id": "DM",
    "name": "Dominica\nUp to 10 Years Imprisonment",
    "fill":am4core.color("#ff4747")
  },
  {
    "id": "GD",
    "name": "Grenada\nUp to 10 Years Imprisonment",
    "fill":am4core.color("#ff4747")
  },
  {
    "id": "GY",
    "name": "Guyana\nUp to Life Imprisonment",
    "fill":am4core.color("#FF0000")
  },
  {
    "id": "JM",
    "name": "Jamaica\nUp to 10 Years Imprisonment",
    "fill":am4core.color("#FF0000")
  },
  {
    "id": "KN",
    "name": "Saint Kitts & Nevis\nUp to 10 Years Imprisonment",
    "fill":am4core.color("#ff4747")
  },
  {
    "id": "LC",
    "name": "St Lucia\nUp to 10 Years Imprisonment",
    "fill":am4core.color("#FF0000")
  },
  {
    "id": "VC",
    "name": "St Vincent & the Grenadines\nUp to 10 Years Imprisonment",
    "fill":am4core.color("#ff4747")
  },
  //End of LAC//
  
  //Start of Asia//
  
  {
    "id": "AF",
    "name": "Afghanistan\nPunishable by Death",
    "fill":am4core.color("#8B0000")
  },
  {
    "id": "BD",
    "name": "Bangladesh\nUp to 10 Years Imprisonment",
    "fill":am4core.color("#ff4747")
  },
  {
    "id": "BT",
    "name": "Bhutan\nUp to One Year Imprisonment",
    "fill":am4core.color("#FF6347")
  },
  {
    "id": "BN",
    "name": "Brunei Darussalam\nUp to 10 Years Imprisonment",
    "fill":am4core.color("#ff4747")
  },
  {
    "id": "IQ",
    "name": "Iraq\nPunishable by Death enforced by Insurgents",
    "fill": am4core.color("#8B0000")
  },
  { 
    "id": "IR",
    "name": "Iran\nPunishable by Death",
    "fill": am4core.color("#8B0000")
  }, 
  {
    "id": "KW",
    "name":"Kuwait\nUp to Seven Years Imprisonment",
    "fill":am4core.color("#ff5e5e")
  },
  {
    "id": "LB",
    "name":"Lebanon\nUp to One Year Imprisonment",
    "fill":am4core.color("#FF6347")
  },
  {
    "id": "MY",
    "name":"Malaysia\nUp to 20 Years Imprisonment",
    "fill":am4core.color("#FF0000")
  },
  {
    "id": "MV",
    "name":"Maldives\nUp to Eight Years Imprisonment",
    "fill":am4core.color("#ff5e5e")
  },
  {
    "id": "MM",
    "name":"Myanmar\nUp to 10 Years Imprisonment",
    "fill":am4core.color("#ff4747")
  },
  {
    "id": "OM",
    "name":"Oman\nUp to Three Years Imprisonment",
    "fill":am4core.color("#FF6347")
  },
  {
    "id": "PK",
    "name":"Pakistan\nPunishable by Death",
    "fill":am4core.color("#8B0000")
  },
  {
    "id": "QA",
    "name":"Qatar\nPunishable by Death",
    "fill":am4core.color("#8B0000")
  },
  {
    "id": "SA",
    "name": "Saudi Arabia\nPunishable by Death",
    "fill": am4core.color("#8B0000")
  },
  {
    "id": "SG",
    "name": "Singapore\nUp to Two Years Imprisonment",
    "fill":am4core.color("#FF6347")
  }, 
  {
    "id": "LK",
    "name": "Sri Lanka\nUp to 10 Years Imprisonment",
    "fill":am4core.color("#ff4747")
  },
  //2018 Report--nPunishable by Death enforced by Insurgents
  {
    "id": "SY",
    "name": "Syrian Arab Republic\nUp to Three Years Imprisonment",
    "fill": am4core.color("#FF6347")
  }, 
  {
    "id": "TM",
    "name": "Turkmenistan\nUp to Two Years Imprisonment",
    "fill":am4core.color("#FF6347")
  },
  {
    "id": "AE",
    "name": "United Arib Emirates\nPunishable by Death",
    "fill": am4core.color("#8B0000")
  },
  {
    "id": "UZ",
    "name":"Uzbekistan\nUp to Three Years Imprisonment",
    "fill":am4core.color("#FF6347")
  },
  {
    "id": "YE",
    "name": "Yemen\nPunishable by Death",
    "fill": am4core.color("#8B0000")
  },
  //End Of Asia//
  //Start of Oceania//
  {
    "id": "CK",
    "name":"Cook Islands\nUp to Five Years Imprisonment",
    "fill":am4core.color("#FF6347")
  },
  {
    "id": "KI",
    "name":"Kirbati\nUp to 14 Years Imprisonment",
    "fill":am4core.color("#ff4747")
  },
  {
    "id": "PG",
    "name":"Papua New Guinea\nUp to Seven Years Imprisonment",
    "fill":am4core.color("#ff5e5e")
  },
  {
    "id": "WS",
    "name":"Samoa\nUp to Seven Years Imprisonment",
    "fill":am4core.color("#ff5e5e")
  },
  {
    "id": "SB",
    "name":"Solomon Islands\nUp to 14 Years Imprisonment",
    "fill":am4core.color("#ff4747")
  },
  {
    "id": "TO",
    "name":"Tonga\nUp to 10 Years Imprisonment",
    "fill":am4core.color("#ff4747")
  },
  {
    "id": "TV",
    "name":"Tuvalu\nUp to 14 Years Imprisonment",
    "fill":am4core.color("#ff4747")
  },
  //End Of Oceania//
  //Start Africa//
  {
    "id": "DZ",
    "name":"Algeria\nUp to Two Years Imprisonment",
    "fill":am4core.color("#FF6347")
  },
  //2018 Angola Report--Up to Three years Internment - - now legal
  {
    "id": "BW",
    "name":"Botswana\nUp to Seven Years Internment",
    "fill":am4core.color("#ff5e5e")
  },
  {
    "id": "BI",
    "name":"Burundi\nUp to Two Years Internment",
    "fill":am4core.color("#FF6347")
  },
  {
    "id": "CM",
    "name":"Cameroon\nUp to Five Years Imprisonment",
    "fill":am4core.color("#FF6347")
  },
  {
    "id": "TD",
    "name":"Chad\nUp to Two Years Imprisonment",
    "fill":am4core.color("#FF6347")
  },
  {
    "id": "KM",
    "name":"Comoros\nUp to Five Years Imprisonment",
    "fill":am4core.color("#FF6347")
  },
  {
    "id": "EG",
    "name":"Egypt\nDe Facto Persecution",
    "fill":am4core.color("#dd7813")
  },
  {
    "id": "ER",
    "name":"Eritrea\nUp to Seven Years Imprisonment",
    "fill":am4core.color("#ff5e5e")
  },
  {
    "id": "SZ",
    "name":"Eswatini\nOfficial Discrimination Laws (seldom enforced)",
    "fill":am4core.color("#dd7813")
  },
  {
    "id": "ET",
    "name":"Ethiopia\nUp to Three Years Imprisonment",
    "fill":am4core.color("#FF6347")
  },
  {
    "id": "GM",
    "name":"Gambia\nUp to 14 Years Imprisonment",
    "fill":am4core.color("#ff4747")
  },
  {
    "id": "GH",
    "name":"Ghana\nUp to Three Years Imprisonment",
    "fill":am4core.color("#FF6347")
  },
  {
    "id": "GN",
    "name":"Guinea\nUp to Three Years Imprisonment",
    "fill":am4core.color("#FF6347")
  },
  {
    "id": "KE",
    "name":"Kenya\nUp to 14 Years Imprisonment",
    "fill":am4core.color("#ff4747")
  },
  {
    "id": "LR",
    "name":"Liberia\nUp to One Year Imprisonment",
    "fill":am4core.color("#FF6347")
  },
  {
    "id": "LY",
    "name":"Libya\nUp to Five Years Imprisonment",
    "fill":am4core.color("#FF6347")
  },
  {
    "id": "MW",
    "name":"Malawi\nUp to 14 Years Imprisonment",
    "fill":am4core.color("#ff4747")
  },
  {
    "id": "MR",
    "name":"Mauritania\nPunishable by Death",
    "fill":am4core.color("#8B0000")
  },
  {
    "id": "MU",
    "name":"Mauritius\nUp to Five Years Imprisonment",
    "fill":am4core.color("#FF6347")
  },
  {
    "id": "MA",
    "name":"Morocco\nUp to Three Years Imprisonment",
    "fill":am4core.color("#FF6347")
  },
  //Namibia-- Law on the books, but no recorded instances of it ever being enforced.
  {
    "id": "NA",
    "name":"Namibia\nOfficial Discrimination Laws (seldom enforced)",
    "fill":am4core.color("#dd7813")
  },
  {
    "id": "NG",
    "name": "Nigeria\nPunishable by Death in areas under Sharia Law",
      "fill": am4core.color("#8B0000")
  },
  {
    "id": "SN",
    "name":"Senegal\nUp to Five Years Imprisonment",
    "fill":am4core.color("#FF6347")
  },
  {
    "id": "SL",
    "name":"Sierra Leone\nUp to 10 Years Imprisonment",
    "fill":am4core.color("#ff4747")
  },
  {
    "id": "SO",
    "name": "Somalia\nPunishable by Death in areas under Sharia Law",
      "fill": am4core.color("#8B0000")
  }, 
  {
    "id": "SS",
    "name":"South Sudan\nUp to 10 Years Imprisonment",
    "fill":am4core.color("#ff4747")
  },
  {
    "id": "SD",
    "name": "Sudan\nPunishable by Death",
    "fill": am4core.color("#8B0000")
  }, 
  {
    "id": "TZ",
    "name":"United Republic of Tanzania\nUp to Life Imprisonment",
    "fill":am4core.color(lifecolor)
  },
  {
    "id": "TG",
    "name":"Togo\nUp to Three Years Imprisonment",
    "fill":am4core.color("#FF6347")
  },
  {
    "id": "TN",
    "name":"Tunisia\nUp to Three Years Imprisonment",
    "fill":am4core.color("#FF6347")
  },
  {
    "id": "UG",
    "name":"Uganda\nUp to Life Imprisonment",
    "fill":am4core.color("#FF0000")
  },
  {
    "id": "ZM",
    "name":"Zambia\nUp to Life Imprisonment",
    "fill":am4core.color("#FF0000")
  },
  {
    "id": "ZW",
    "name":"Zimbabwe\nUp to One Year Imprisonment",
    "fill":am4core.color("#FF6347")
  }
  //End Africa//
  ];
  /*[{
  "id": "IR",
  "name": "Iran\nPunishable by Death",
  "title": "Punishable by Death",
  "fill": am4core.color("#8B0000")
}, {
  "id": "SA",
  "name": "Saudi Arabia\nPunishable by Death",
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
*/

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
