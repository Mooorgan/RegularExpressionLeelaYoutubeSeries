import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'regExp';

  ngOnInit(): void {
    //--------------------------------------------------------------------------------------------
    // const text = 'Hello world leela';

    // const regex1 = new RegExp('Hello');
    // const regex2 = /world/;
    // const regex3 = /\s/;

    // console.log(regex1.test(text));
    // console.log(regex2.test(text));

    // console.log(regex2.exec(text));

    // //String Method
    // console.log(text.match(regex2));
    // console.log(text.search(regex2));
    // console.log(text.replace(regex2, 'globe'));
    // // console.log(text.split(regex2));
    // console.log(text.split(regex3));
    //--------------------------------------------------------------------------------------------

    const str = 'Hello world. HiS This is Leela';
    const str1 = '2022.02.3';

    // const regex = new RegExp('s', 'gi');
    const regex = new RegExp('s', 'gi');
    const regex1 = /^(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})$/g;

    // console.log(str.match(regex));

    console.log(regex.exec(str));
    console.log(regex1.exec(str1));
    // console.log([1, 2, 3, 4, 5]);
    // console.log(regex.exec(str));
    // console.log(regex.exec(str));
    // console.log(regex.exec(str));

    // let match: RegExpExecArray | null;
    // while ((match = regex.exec(str)) !== null) {
    //   console.log(match);
    // }
    //--------------------------------------------------------------------------------------------

    // const password = 'JustGone1!';

    // const length = /.{8,32}/;
    // const specialCase = /[^A-Za-z0-9]/;
    // const lowerCase = /[a-z]/;
    // const upperCase = /[A-Z]/;
    // const numberCase = /[0-9]/;

    // if (
    //   length.test(password) &&
    //   specialCase.test(password) &&
    //   lowerCase.test(password) &&
    //   upperCase.test(password) &&
    //   numberCase.test(password)
    // ) {
    //   console.log('Matches');
    // } else {
    //   console.log('Not Match');
    // }
    //--------------------------------------------------------------------------------------------

    const html = '<b>This is bold</b>';
    console.log(html.replace(/b>/g, 'strong>'));

    const names = ['Gates, Bill', 'Pichai, Sundar', 'Nadella, Satya'];

    const newNames = names.map((name) => {
      return name.replace(/(\w+), (\w+)/, '$2 $1');
    });
    console.log(newNames);
  }
}
