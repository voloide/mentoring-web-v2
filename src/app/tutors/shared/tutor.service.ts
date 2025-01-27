import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http';
import * as myGlobals from '../../../globals';
import { Subject } from 'rxjs';


/**
 * @author damasceno.lopes
 */
@Injectable()
export class TutorsService {


  public url: string = myGlobals.API;
  invokeEvent: Subject<any> = new Subject();

  constructor(private httpClient: HttpClient) {
  }

  callMethodUpdateOfComponent() {
    this.invokeEvent.next('someVal');
  }

  callMethodReloadOfComponent() {
    this.invokeEvent.next('someValReload');
  }

  findTutors(code, name, surname, phone) {
   const params = new HttpParams()
   .set('code', code)
   .set('name', name)
   .set('surname', surname);
  return this.httpClient.get<any>(myGlobals.API+'/mentoring-integ/services/tutors', {params});
  }

  findTutorsForPartner(code, name, surname, phone, partnerUuid) {
    const params = new HttpParams()
    .set('code', code)
    .set('name', name)
    .set('surname', surname)
    .set('partnerUuid', partnerUuid);
   return this.httpClient.get<any>(myGlobals.API+'/mentoring-integ/services/tutors/tutor-partner', {params});
   }

  create(data){
    return this.httpClient.post<any>(myGlobals.API+'/mentoring-integ/services/tutors', data);
  }

  createTutorProgrammaticArea(data){
    return this.httpClient.post<any>(myGlobals.API+'/mentoring-integ/services/tutor-programmatic-areas', data);
  }

  update(data){
    return this.httpClient.put<any>(myGlobals.API+'/mentoring-integ/services/tutors', data);
  }

  findCareers() {
    return this.httpClient.get<any>(myGlobals.API+'/mentoring-integ/services/careers');
  }

  findPartners() {
    return this.httpClient.get<any>(myGlobals.API+'/mentoring-integ/services/v2/partners');
  }

  findAllLocations() {
    return this.httpClient.get<any>(myGlobals.API+'/mentoring-integ/services/healthfacilities');
  }

  findAllDistrictsOfProvince(province) {
    return this.httpClient.get<any>(myGlobals.API+'/mentoring-integ/services/districts?province='+province);
  }

  findCareerPositions(career) {
    return this.httpClient.get<any>(myGlobals.API+'/mentoring-integ/services/careers/'+career);
  }

  allocateToLocation(tutor){
    return this.httpClient.post<any>(myGlobals.API+'/mentoring-integ/services/tutors/v2/tutor-locations', tutor);
  }

  findTutoresByUuid(uuid){
    return this.httpClient.get<any>(myGlobals.API+'/mentoring-integ/services/tutors/'+uuid);
  }

  findAllLocationsOfProvince(province) {
    return this.httpClient.get<any>(myGlobals.API+'/mentoring-integ/services/healthfacilities/province/'+province);
  }

  findAllHealthfacilitiesOfDistrict(districtId) {
    return this.httpClient.get<any>(myGlobals.API+'/mentoring-integ/services/healthfacilities/'+districtId);
  }
  
}
