import { Injectable } from '@nestjs/common';
import * as moment from "moment";

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to our site !!!!  ' + moment().format('MMMM Do YYYY, h:mm:ss a');
  }
}
