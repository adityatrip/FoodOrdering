import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
  data = [{
    'id': 1,
    'first_name': 'Mozelle',
    'isOld': false,
  	'email': 'myakushkin0@zdnet.com',
    'gender': 'Female',
    'date': 12/10/2023
  }, {
    'id': 2,
    'first_name': 'Harp',
    'isOld': false,
  	'email': 'hleith1@delicious.com',
    'gender': 'Male',
    'date': 4/9/2024
  }, {
    //3		TRUE	ktewkesbury2@homestead.com		11/22/2023
    'id': 3,
    'first_name': 'Kaspar',
    'isOld': true,
  	'email': 'ktewkesbury2@homestead.com',
    'gender': 'Male',
    'date': 11/22/2023
  },
  // {
  //   // 4	Stevy	FALSE	snorquoy3@digg.com	Polygender	10/18/2023
  //   'id': 1,
  //   'first_name': 'Mozelle',
  //   'isOld': false,
  // 	'email': 'myakushkin0@zdnet.com',
  //   'gender': 'Female',
  //   'date': 12/10/2023
  // }, {
  //   //5	Bert	FALSE	brubes4@webnode.com	Female	10/19/2023
  //   'id': 1,
  //   'first_name': 'Mozelle',
  //   'isOld': false,
  // 	'email': 'myakushkin0@zdnet.com',
  //   'gender': 'Female',
  //   'date': 12/10/2023
  // }, {
  //   //6	Launce	TRUE	ljacobowicz5@ow.ly	Male	8/27/2023
  //   'id': 1,
  //   'first_name': 'Mozelle',
  //   'isOld': false,
  // 	'email': 'myakushkin0@zdnet.com',
  //   'gender': 'Female',
  //   'date': 12/10/2023
  // }, {
  //   //7	Inna	FALSE	igirhard6@census.gov	Female	12/3/2023
  //   'id': 1,
  //   'first_name': 'Mozelle',
  //   'isOld': false,
  // 	'email': 'myakushkin0@zdnet.com',
  //   'gender': 'Female',
  //   'date': 12/10/2023
  // }, {
  //   //8	Shepard	TRUE	ssuett7@blogspot.com	Male	11/12/2023
  //   'id': 1,
  //   'first_name': 'Mozelle',
  //   'isOld': false,
  // 	'email': 'myakushkin0@zdnet.com',
  //   'gender': 'Female',
  //   'date': 12/10/2023
  // }, {
  //   //9	Glynn	FALSE	ggages8@shareasale.com	Male	4/29/2024
  //   'id': 1,
  //   'first_name': 'Mozelle',
  //   'isOld': false,
  // 	'email': 'myakushkin0@zdnet.com',
  //   'gender': 'Female',
  //   'date': 12/10/2023
  // }, {
  //   //10	Ode	FALSE	oormerod9@rakuten.co.jp	Male	8/2/2023
  //   'id': 1,
  //   'first_name': 'Mozelle',
  //   'isOld': false,
  // 	'email': 'myakushkin0@zdnet.com',
  //   'gender': 'Female',
  //   'date': 12/10/2023
  // }
]
  

}
